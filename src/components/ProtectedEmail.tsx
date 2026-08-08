"use client";

import { useEffect, useState } from "react";

/** Split so the full address never appears as one string in the HTML source. */
const USER = ["Rat", "Pack", "events"].join("");
const HOST = ["yahoo", "com"].join(".");

export function emailAddress() {
  return `${USER}\u0040${HOST}`;
}

export function buildMailto(subject?: string, body?: string) {
  const full = emailAddress();
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const q = params.toString();
  return q ? `mailto:${full}?${q}` : `mailto:${full}`;
}

type Props = {
  prefix?: string;
  className?: string;
  variant?: "link" | "button" | "button-crimson";
  children?: React.ReactNode;
  subject?: string;
  body?: string;
};

/**
 * Spam-hardened contact link. Address is assembled only after mount in JS;
 * bots that only scrape static HTML get no usable mailto/plaintext email.
 */
export function ProtectedEmail({
  prefix = "",
  className = "",
  variant = "link",
  children,
  subject,
  body,
}: Props) {
  const [href, setHref] = useState<string | undefined>(undefined);
  const [label, setLabel] = useState(`${prefix}${USER}\u200B[at]\u200B${HOST}`);

  useEffect(() => {
    const full = emailAddress();
    setHref(buildMailto(subject, body));
    if (!children) {
      setLabel(`${prefix}${full}`);
    }
  }, [prefix, children, subject, body]);

  const onActivate = (e: React.MouseEvent | React.KeyboardEvent) => {
    const mail = buildMailto(subject, body);
    if (!href) {
      e.preventDefault();
      window.location.href = mail;
    }
  };

  if (variant === "button" || variant === "button-crimson") {
    const btnClass =
      variant === "button-crimson" ? `btn btn-crimson ${className}` : `btn ${className}`;
    return (
      <a
        className={btnClass.trim()}
        href={href ?? "#contact-email"}
        onClick={onActivate}
        rel="nofollow"
      >
        {children ?? "Email"}
      </a>
    );
  }

  return (
    <a
      className={className}
      href={href ?? "#contact-email"}
      onClick={onActivate}
      rel="nofollow"
    >
      {children ?? label}
    </a>
  );
}
