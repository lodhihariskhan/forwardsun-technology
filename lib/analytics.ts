type EventParams = Record<string, string | number | boolean | undefined>;
const META_LEAD_DEDUPE_WINDOW_MS = 2000;
let lastMetaLeadTimestamp = 0;

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, parameters?: EventParams) => void;
    fbq?: (command: "init" | "track", eventName: string, parameters?: EventParams) => void;
  }
}

function trackEvent(eventName: string, parameters?: EventParams) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, parameters);
}

function trackMetaEvent(eventName: "PageView" | "Lead", parameters?: EventParams) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") {
    return false;
  }

  window.fbq("track", eventName, parameters);
  return true;
}

export type ContactFormSubmitPayload = {
  customerType: string;
  solutionRequired: string;
  area: string;
  averageMonthlyUnits: string;
};

export function trackContactFormSubmit(payload: ContactFormSubmitPayload) {
  trackEvent("contact_form_submit", {
    customer_type: payload.customerType,
    solution_required: payload.solutionRequired,
    area: payload.area,
    average_monthly_units: payload.averageMonthlyUnits,
  });
}

export function trackWhatsAppClick(buttonLocation: string) {
  trackEvent("whatsapp_click", { button_location: buttonLocation });
}

export function trackPhoneClick(buttonLocation: string) {
  trackEvent("phone_click", { button_location: buttonLocation });
}

export function trackGetFreeAssessmentClick(buttonLocation: string) {
  trackEvent("get_free_assessment_click", { button_location: buttonLocation });
}

export function trackMetaPageView() {
  trackMetaEvent("PageView");
}

export function trackMetaLead() {
  const now = Date.now();

  if (now - lastMetaLeadTimestamp < META_LEAD_DEDUPE_WINDOW_MS) {
    return;
  }

  if (trackMetaEvent("Lead")) {
    lastMetaLeadTimestamp = now;
  }
}
