"use client";

import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

type HashLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    children: ReactNode;
  };

/**
 * Wraps next/link for same-page section anchors (e.g. "/#services").
 * Next's router only auto-scrolls to a hash on a fresh page load, not when
 * you're already on the page — so a plain Link does nothing if you're
 * scrolled elsewhere. This scrolls manually when the target id is already
 * in the DOM, and falls back to normal navigation otherwise (e.g. from
 * /privacy-policy back to a homepage section).
 */
export default function HashLink({
  href,
  onClick,
  children,
  ...rest
}: HashLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const hashIndex = href.toString().indexOf("#");
    if (hashIndex !== -1) {
      const id = href.toString().slice(hashIndex + 1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${id}`);
      }
    }
    onClick?.(e);
  };

  return (
    <Link href={href} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}
