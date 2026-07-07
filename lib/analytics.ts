import { trackMetaContact, trackMetaLead } from "@/lib/metaPixel";

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, parameters?: EventParams) => void;
  }
}

function trackEvent(eventName: string, parameters?: EventParams) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, parameters);
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
  trackMetaLead({
    customer_type: payload.customerType,
    solution_required: payload.solutionRequired,
  });
}

export function trackWhatsAppClick(buttonLocation: string) {
  trackEvent("whatsapp_click", { button_location: buttonLocation });
  trackMetaContact({ method: "whatsapp", button_location: buttonLocation });
}

export function trackPhoneClick(buttonLocation: string) {
  trackEvent("phone_click", { button_location: buttonLocation });
  trackMetaContact({ method: "phone", button_location: buttonLocation });
}

export function trackGetFreeAssessmentClick(buttonLocation: string) {
  trackEvent("get_free_assessment_click", { button_location: buttonLocation });
}
