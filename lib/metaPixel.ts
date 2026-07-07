type MetaEventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

function trackMetaEvent(eventName: string, parameters?: MetaEventParams) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") {
    return;
  }

  window.fbq("track", eventName, parameters);
}

export function trackMetaPageView() {
  trackMetaEvent("PageView");
}

export function trackMetaLead(parameters?: MetaEventParams) {
  trackMetaEvent("Lead", parameters);
}

export function trackMetaContact(parameters?: MetaEventParams) {
  trackMetaEvent("Contact", parameters);
}

export function trackMetaViewContent(parameters?: MetaEventParams) {
  trackMetaEvent("ViewContent", parameters);
}
