type GtagEventParameters = {
  event_category?: string;
  event_label?: string;
  value?: number;
};

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      parameters?: GtagEventParameters,
    ) => void;
  }
}

export function trackEvent(eventName: string, parameters?: GtagEventParameters) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, parameters);
}

export function trackLeadFormSubmission() {
  trackEvent("generate_lead", {
    event_category: "lead",
    event_label: "contact_form",
  });
}

export function trackWhatsAppClick(label = "whatsapp") {
  trackEvent("whatsapp_click", {
    event_category: "engagement",
    event_label: label,
  });
}

export function trackGetFreeAssessmentClick(label = "get_free_assessment") {
  trackEvent("get_free_assessment_click", {
    event_category: "cta",
    event_label: label,
  });
}

export {};
