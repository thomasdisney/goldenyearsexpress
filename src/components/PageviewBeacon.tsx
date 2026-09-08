"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/** Records one pageview per client navigation, with document.referrer for source. */
export function PageviewBeacon() {
  const pathname = usePathname();
  const last = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname || pathname === last.current) return;
    if (pathname.startsWith("/api")) return;
    last.current = pathname;
    const referrer = typeof document !== "undefined" ? document.referrer : "";
    fetch("/api/pageview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ referrer }),
      keepalive: true,
    }).catch(() => {});
  }, [pathname]);

  return null;
}
