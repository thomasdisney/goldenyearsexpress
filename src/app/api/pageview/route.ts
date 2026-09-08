import { NextResponse } from "next/server";
import { recordPageview } from "@/lib/pageviews";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  let referrer: string | null = null;
  try {
    const body = (await request.json()) as { referrer?: string };
    referrer = body.referrer ?? null;
  } catch {
    referrer = request.headers.get("referer");
  }
  const stats = await recordPageview("gye", referrer);
  if (stats == null) {
    return NextResponse.json(
      { ok: false, error: "counter unavailable" },
      { status: 503 },
    );
  }
  return NextResponse.json({ ok: true, pageviews: stats.total, bySource: stats.bySource });
}

export async function GET(request: Request) {
  const referrer = request.headers.get("referer");
  const stats = await recordPageview("gye", referrer);
  if (stats == null) {
    return NextResponse.json(
      { ok: false, error: "counter unavailable" },
      { status: 503 },
    );
  }
  return NextResponse.json({ ok: true, pageviews: stats.total, bySource: stats.bySource });
}
