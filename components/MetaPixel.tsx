"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { trackMetaPageView } from "@/lib/analytics";

type MetaPixelProps = {
  pixelId?: string;
};

type FbqFunction = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[];
  loaded: boolean;
  version: string;
};

export function MetaPixel({ pixelId }: MetaPixelProps) {
  const pathname = usePathname();
  const initializedRef = useRef(false);
  const skipFirstRouteEffectRef = useRef(true);

  useEffect(() => {
    if (!pixelId || initializedRef.current || typeof document === "undefined") {
      return;
    }

    initializedRef.current = true;

    if (typeof window.fbq !== "function") {
      const fbq: FbqFunction = ((...args: unknown[]) => {
        if (typeof fbq.callMethod === "function") {
          fbq.callMethod(...args);
        } else {
          fbq.queue.push(args);
        }
      }) as FbqFunction;

      fbq.queue = [];
      fbq.loaded = true;
      fbq.version = "2.0";
      window.fbq = fbq;
    }

    if (!document.getElementById("meta-pixel-script")) {
      const script = document.createElement("script");
      script.id = "meta-pixel-script";
      script.async = true;
      script.src = "https://connect.facebook.net/en_US/fbevents.js";
      document.head.appendChild(script);
    }

    window.fbq?.("init", pixelId);
    window.fbq?.("track", "PageView");
  }, [pixelId]);

  useEffect(() => {
    if (!pixelId) {
      return;
    }

    if (skipFirstRouteEffectRef.current) {
      skipFirstRouteEffectRef.current = false;
      return;
    }

    trackMetaPageView();
  }, [pixelId, pathname]);

  return null;
}
