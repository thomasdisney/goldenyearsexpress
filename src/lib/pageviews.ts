function redisEnv(): { url: string; token: string } | null {
  const url =
    process.env.UPSTASH_REDIS_REST_URL ||
    process.env.KV_REST_API_URL ||
    process.env.STORAGE_UPSTASH_REDIS_REST_URL ||
    process.env.STORAGE_KV_REST_API_URL ||
    "";
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN ||
    process.env.KV_REST_API_TOKEN ||
    process.env.STORAGE_UPSTASH_REDIS_REST_TOKEN ||
    process.env.STORAGE_KV_REST_API_TOKEN ||
    "";
  if (!url || !token) return null;
  return { url: url.replace(/\/$/, ""), token };
}

export function pageviewsKey(siteKey: string): string {
  return process.env.PAGEVIEWS_REDIS_KEY || `pageviews:${siteKey}`;
}

export function sourceKey(siteKey: string, source: string): string {
  return `${pageviewsKey(siteKey)}:src:${source}`;
}

export type TrafficSource =
  | "direct"
  | "google"
  | "facebook"
  | "instagram"
  | "other";

export const SOURCE_LABELS: Record<TrafficSource, string> = {
  direct: "Direct",
  google: "Google",
  facebook: "Facebook",
  instagram: "Instagram",
  other: "Other",
};

export const SOURCE_ORDER: TrafficSource[] = [
  "direct",
  "google",
  "facebook",
  "instagram",
  "other",
];

/** Classify a referrer URL (or empty) into a traffic source bucket. */
export function classifyReferrer(referrer: string | null | undefined): TrafficSource {
  const raw = (referrer || "").trim();
  if (!raw) return "direct";
  let host = "";
  try {
    host = new URL(raw).hostname.toLowerCase();
  } catch {
    return "other";
  }
  if (!host) return "direct";
  if (
    host === "google.com" ||
    host.endsWith(".google.com") ||
    host === "google.co.uk" ||
    host.endsWith(".google.co.uk") ||
    host.startsWith("www.google.") ||
    host === "google." ||
    /^google\./.test(host)
  ) {
    return "google";
  }
  if (
    host === "facebook.com" ||
    host.endsWith(".facebook.com") ||
    host === "fb.com" ||
    host.endsWith(".fb.com") ||
    host === "m.facebook.com" ||
    host === "l.facebook.com"
  ) {
    return "facebook";
  }
  if (
    host === "instagram.com" ||
    host.endsWith(".instagram.com") ||
    host === "l.instagram.com"
  ) {
    return "instagram";
  }
  return "other";
}

async function redisCommand(
  cmd: (string | number)[],
): Promise<unknown | null> {
  const env = redisEnv();
  if (!env) return null;
  const res = await fetch(`${env.url}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cmd),
    cache: "no-store",
  });
  if (!res.ok) return null;
  const data = (await res.json()) as { result?: unknown };
  return data.result ?? null;
}

async function redisPipeline(
  cmds: (string | number)[][],
): Promise<unknown[] | null> {
  const env = redisEnv();
  if (!env) return null;
  const res = await fetch(`${env.url}/pipeline`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cmds),
    cache: "no-store",
  });
  if (!res.ok) return null;
  const data = (await res.json()) as { result?: unknown }[] | unknown;
  if (!Array.isArray(data)) return null;
  return data.map((row) =>
    row && typeof row === "object" && "result" in (row as object)
      ? (row as { result: unknown }).result
      : row,
  );
}

export type PageviewStats = {
  total: number;
  bySource: Record<TrafficSource, number>;
};

export async function recordPageview(
  siteKey: string,
  referrer: string | null | undefined,
): Promise<PageviewStats | null> {
  const env = redisEnv();
  if (!env) return null;
  const source = classifyReferrer(referrer);
  const results = await redisPipeline([
    ["INCR", pageviewsKey(siteKey)],
    ["INCR", sourceKey(siteKey, source)],
  ]);
  if (!results) return null;
  const total = Number(results[0]) || 0;
  // Re-read all sources for accurate breakdown after this hit
  return getPageviewStats(siteKey);
}

export async function getPageviewStats(
  siteKey: string,
): Promise<PageviewStats | null> {
  const env = redisEnv();
  if (!env) return null;
  const cmds: (string | number)[][] = [["GET", pageviewsKey(siteKey)]];
  for (const s of SOURCE_ORDER) {
    cmds.push(["GET", sourceKey(siteKey, s)]);
  }
  const results = await redisPipeline(cmds);
  if (!results) return null;
  const total = Number(results[0] ?? 0) || 0;
  const bySource = {} as Record<TrafficSource, number>;
  SOURCE_ORDER.forEach((s, i) => {
    bySource[s] = Number(results[i + 1] ?? 0) || 0;
  });
  return { total, bySource };
}
