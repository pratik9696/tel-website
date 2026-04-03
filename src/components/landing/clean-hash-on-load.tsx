"use client";

import { useEffect } from "react";

export function CleanHashOnLoad() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const id = decodeURIComponent(hash.replace(/^#/, ""));

    const scroll = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });

      const { pathname, search } = window.location;
      window.history.replaceState(null, "", `${pathname}${search}`);
    };

    // Let layout paint first (sticky header, fonts, etc.)
    const t = window.setTimeout(scroll, 50);
    return () => window.clearTimeout(t);
  }, []);

  return null;
}

