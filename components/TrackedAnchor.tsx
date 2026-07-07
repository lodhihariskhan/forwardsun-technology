"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/analytics";

type TrackedAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  trackingEvent: "phone_click" | "whatsapp_click";
  trackingLocation: string;
};

export function TrackedAnchor({
  trackingEvent,
  trackingLocation,
  onClick,
  ...anchorProps
}: TrackedAnchorProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (trackingEvent === "phone_click") {
      trackPhoneClick(trackingLocation);
    } else {
      trackWhatsAppClick(trackingLocation);
    }

    onClick?.(event);
  }

  return <a {...anchorProps} onClick={handleClick} />;
}
