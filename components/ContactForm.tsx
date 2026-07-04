"use client";

import { FormEvent, useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";

const billRanges = [
  "Below PKR 25,000",
  "PKR 25,000 - 50,000",
  "PKR 50,000 - 100,000",
  "PKR 100,000 - 200,000",
  "Above PKR 200,000",
];

const services = [
  "Residential Solar Solutions",
  "Commercial Solar Solutions",
  "Hybrid Solar & Battery Backup",
  "EV Charger Installation",
  "Maintenance & After-Sales Support",
];

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  area: string;
  customerType: string;
  billRange: string;
  service: string;
  message: string;
};

const initialForm: FormState = {
  fullName: "",
  phone: "",
  email: "",
  area: "",
  customerType: "Home",
  billRange: billRanges[1],
  service: services[0],
  message: "",
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
      form.billRange,
      form.service,
    ];

    if (requiredValues.some((value) => !value.trim())) {
      setStatus("error");
      setErrorMessage("Please complete your name, phone number, city or area, customer type, bill range, and interested service.");
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
          email: form.email.trim(),
          area: form.area.trim(),
          customerType: form.customerType,
          billRange: form.billRange,
          service: form.service,
          message: form.message.trim(),
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
          Full name
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
          Phone number
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
          Email optional
          <input
            value={form.email}
            onChange={(event) => update("email", event.target.value)}
            className="h-12 rounded-xl border border-line bg-mist px-4 font-normal outline-none transition focus:border-forest focus:bg-white focus:ring-2 focus:ring-forest/15"
            placeholder="name@example.com"
            type="email"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-charcoal">
          City / Area
          <input
            required
            aria-required="true"
            value={form.area}
            onChange={(event) => update("area", event.target.value)}
            className="h-12 rounded-xl border border-line bg-mist px-4 font-normal outline-none transition focus:border-forest focus:bg-white focus:ring-2 focus:ring-forest/15"
            placeholder="DHA Rahbar, Lahore"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-charcoal">
          Customer type
          <select
            required
            aria-required="true"
            value={form.customerType}
            onChange={(event) => update("customerType", event.target.value)}
            className="h-12 rounded-xl border border-line bg-mist px-4 font-normal outline-none transition focus:border-forest focus:bg-white focus:ring-2 focus:ring-forest/15"
          >
            <option>Home</option>
            <option>Business</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-charcoal">
          Monthly electricity bill range
          <select
            required
            aria-required="true"
            value={form.billRange}
            onChange={(event) => update("billRange", event.target.value)}
            className="h-12 rounded-xl border border-line bg-mist px-4 font-normal outline-none transition focus:border-forest focus:bg-white focus:ring-2 focus:ring-forest/15"
          >
            {billRanges.map((range) => (
              <option key={range}>{range}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="grid gap-2 text-sm font-bold text-charcoal">
        Interested service
        <select
          required
          aria-required="true"
          value={form.service}
          onChange={(event) => update("service", event.target.value)}
          className="h-12 rounded-xl border border-line bg-mist px-4 font-normal outline-none transition focus:border-forest focus:bg-white focus:ring-2 focus:ring-forest/15"
        >
          {services.map((service) => (
            <option key={service}>{service}</option>
          ))}
        </select>
      </label>

      <label className="grid gap-2 text-sm font-bold text-charcoal">
        Message
        <textarea
          value={form.message}
          onChange={(event) => update("message", event.target.value)}
          className="min-h-32 rounded-xl border border-line bg-mist px-4 py-3 font-normal outline-none transition focus:border-forest focus:bg-white focus:ring-2 focus:ring-forest/15"
          placeholder="Tell us about your site, backup needs, or current system."
        />
      </label>

      <p className="rounded-2xl border border-line bg-sunsoft p-4 text-sm leading-6 text-charcoal/70">
        For a more accurate estimate, our team may request your latest electricity bill or monthly
        unit usage.
      </p>

      {status === "success" ? (
        <p
          role="status"
          className="rounded-2xl border border-forest/20 bg-forest/10 p-4 text-sm font-bold leading-6 text-forest"
        >
          Thank you. Your solar assessment request has been received. Our team will contact you shortly.
        </p>
      ) : null}

      {status === "error" ? (
        <p
          role="alert"
          className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-bold leading-6 text-red-700"
        >
          {errorMessage}
        </p>
      ) : null}

      <div className="grid gap-3 sm:grid-cols-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-bold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-deep hover:shadow-soft focus:outline-none focus:ring-2 focus:ring-solar focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:bg-forest disabled:hover:shadow-card"
        >
          <Send aria-hidden className="h-4 w-4" />
          {status === "loading" ? "Sending..." : "Request Free Solar Assessment"}
        </button>
        <a
          href={whatsappLink("Hello ForwardSun Technology, I want to request a free solar quote.")}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line bg-white px-5 py-3 text-sm font-bold text-forest shadow-sm transition hover:-translate-y-0.5 hover:border-solar hover:bg-sunsoft hover:shadow-card focus:outline-none focus:ring-2 focus:ring-solar focus:ring-offset-2"
        >
          <MessageCircle aria-hidden className="h-4 w-4" />
          WhatsApp {site.whatsappDisplay}
        </a>
      </div>
    </form>
  );
}
