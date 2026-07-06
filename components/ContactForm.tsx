"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { consultationOptions, customerTypes } from "@/lib/consultationOptions";
import { whatsappLink } from "@/lib/site";

type FormState = {
  fullName: string;
  phone: string;
  area: string;
  customerType: string;
  averageMonthlyUnits: string;
  solutionRequired: string;
  additionalNotes: string;
};

const initialForm: FormState = {
  fullName: "",
  phone: "",
  area: "",
  customerType: customerTypes[0],
  averageMonthlyUnits: "",
  solutionRequired: consultationOptions[0],
  additionalNotes: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function update(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setStatus("idle");
    setErrorMessage("");
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const requiredValues = [
      form.fullName,
      form.phone,
      form.area,
      form.customerType,
      form.averageMonthlyUnits,
      form.solutionRequired,
    ];

    if (requiredValues.some((value) => !value.trim())) {
      setStatus("error");
      setErrorMessage("Please complete your name, mobile number, area (Lahore), customer type, average monthly units, and solution required.");
      return;
    }

    const monthlyUnits = Number(form.averageMonthlyUnits);

    if (!Number.isFinite(monthlyUnits) || monthlyUnits <= 0) {
      setStatus("error");
      setErrorMessage("Average monthly units must be a positive number.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: form.fullName.trim(),
          phone: form.phone.trim(),
          area: form.area.trim(),
          customerType: form.customerType,
          averageMonthlyUnits: form.averageMonthlyUnits.trim(),
          solutionRequired: form.solutionRequired,
          additionalNotes: form.additionalNotes.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit contact form");
      }

      setForm(initialForm);
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or contact us directly on WhatsApp.");
    }
  }

  return (
    <form
      onSubmit={submit}
      className="grid gap-5 rounded-3xl border border-line bg-white p-5 shadow-premium sm:p-7"
    >
      <div className="border-b border-line pb-5">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-forest">
          Assessment Request
        </p>
        <h2 className="mt-2 text-2xl font-black text-charcoal">Solar consultation details</h2>
        <p className="mt-3 text-sm leading-7 text-charcoal/68">
          Submit the form and the ForwardSun team will receive your assessment request by email.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-charcoal">
          Full Name
          <input
            required
            aria-required="true"
            value={form.fullName}
            onChange={(event) => update("fullName", event.target.value)}
            className="h-12 rounded-xl border border-line bg-mist px-4 font-normal outline-none transition focus:border-forest focus:bg-white focus:ring-2 focus:ring-forest/15"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-charcoal">
          Mobile / WhatsApp Number
          <input
            required
            aria-required="true"
            value={form.phone}
            onChange={(event) => update("phone", event.target.value)}
            className="h-12 rounded-xl border border-line bg-mist px-4 font-normal outline-none transition focus:border-forest focus:bg-white focus:ring-2 focus:ring-forest/15"
            placeholder="+92..."
            type="tel"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-charcoal">
          Area (Lahore)
          <input
            required
            aria-required="true"
            value={form.area}
            onChange={(event) => update("area", event.target.value)}
            className="h-12 rounded-xl border border-line bg-mist px-4 font-normal outline-none transition focus:border-forest focus:bg-white focus:ring-2 focus:ring-forest/15"
            placeholder="Example: DHA Rahbar"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-charcoal">
          Customer Type
          <select
            required
            aria-required="true"
            value={form.customerType}
            onChange={(event) => update("customerType", event.target.value)}
            className="h-12 rounded-xl border border-line bg-mist px-4 font-normal outline-none transition focus:border-forest focus:bg-white focus:ring-2 focus:ring-forest/15"
          >
            {customerTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-charcoal">
          Average Monthly Units
          <input
            required
            aria-required="true"
            value={form.averageMonthlyUnits}
            onChange={(event) => update("averageMonthlyUnits", event.target.value)}
            className="h-12 rounded-xl border border-line bg-mist px-4 font-normal outline-none transition focus:border-forest focus:bg-white focus:ring-2 focus:ring-forest/15"
            min="1"
            placeholder="Example: 650"
            type="number"
          />
          <span className="text-xs font-semibold text-charcoal/60">
            You can find your monthly units on your electricity bill.
          </span>
        </label>
        <label className="grid gap-2 text-sm font-bold text-charcoal">
          Solution Required
          <select
            required
            aria-required="true"
            value={form.solutionRequired}
            onChange={(event) => update("solutionRequired", event.target.value)}
            className="h-12 rounded-xl border border-line bg-mist px-4 font-normal outline-none transition focus:border-forest focus:bg-white focus:ring-2 focus:ring-forest/15"
          >
            {consultationOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="grid gap-2 text-sm font-bold text-charcoal">
        Additional Notes
        <textarea
          value={form.additionalNotes}
          onChange={(event) => update("additionalNotes", event.target.value)}
          className="min-h-32 rounded-xl border border-line bg-mist px-4 py-3 font-normal outline-none transition focus:border-forest focus:bg-white focus:ring-2 focus:ring-forest/15"
          placeholder="Tell us about your site, backup needs, or current system."
        />
      </label>

      {status !== "success" ? (
        <p className="rounded-2xl border border-line bg-sunsoft p-4 text-sm leading-6 text-charcoal/70">
          Our team will review your requirements and recommend the most suitable solar solution for
          your property.
        </p>
      ) : null}

      {status === "success" ? (
        <div
          role="status"
          className="rounded-2xl border border-forest/20 bg-forest/10 p-4 text-sm leading-6 text-forest"
        >
          <h3 className="text-base font-black">Assessment Request Received</h3>
          <p className="mt-2 font-bold">Thank you for contacting ForwardSun Technology.</p>
          <p className="mt-2 text-forest/82">
            Our solar consultant will review your requirements and contact you shortly to recommend
            the most suitable solar solution.
          </p>
          <p className="mt-2 text-forest/82">
            If your request is urgent, you can also chat with us on WhatsApp.
          </p>
          <a
            href={whatsappLink("Hello ForwardSun Technology, I submitted an assessment request and need urgent help.")}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-forest px-5 py-2 text-sm font-black text-white shadow-card transition hover:bg-deep focus:outline-none focus:ring-2 focus:ring-solar focus:ring-offset-2"
          >
            <WhatsAppIcon aria-hidden className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </div>
      ) : null}

      {status === "error" ? (
        <p
          role="alert"
          className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-bold leading-6 text-red-700"
        >
          {errorMessage}
        </p>
      ) : null}

      {status !== "success" ? (
        <div className="grid gap-3 sm:grid-cols-2">
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-bold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-deep hover:shadow-soft focus:outline-none focus:ring-2 focus:ring-solar focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:bg-forest disabled:hover:shadow-card"
          >
            <Send aria-hidden className="h-4 w-4" />
            {status === "loading" ? "Sending..." : "Get Free Assessment"}
          </button>
          <a
            href={whatsappLink("Hello ForwardSun Technology, I want to request a free solar quote.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line bg-white px-5 py-3 text-sm font-bold text-forest shadow-sm transition hover:-translate-y-0.5 hover:border-solar hover:bg-sunsoft hover:shadow-card focus:outline-none focus:ring-2 focus:ring-solar focus:ring-offset-2"
          >
            <WhatsAppIcon aria-hidden className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </div>
      ) : null}
    </form>
  );
}
