import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Privacy Policy | ForwardSun Technology",
  },
  description:
    "Read how ForwardSun Technology handles personal information submitted for solar consultations in Lahore.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <section className="bg-white px-4 py-16 text-charcoal sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-forest">ForwardSun Technology</p>
        <h1 className="mt-3 text-3xl font-black sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm font-semibold text-charcoal/60">Last updated: July 8, 2026</p>

        <div className="mt-7 space-y-5 text-sm leading-7 text-charcoal/78 sm:text-base">
          <p>
            ForwardSun Technology provides solar consultation and installation services in Lahore.
            This page explains what information we collect and how we use it when you contact us.
          </p>

          <div>
            <h2 className="text-lg font-black text-charcoal">Information we collect</h2>
            <p className="mt-2">
              When you submit our assessment form, we may collect your name, phone number, area in
              Lahore, customer type, average monthly electricity units, and project details or notes.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-black text-charcoal">How we use your information</h2>
            <p className="mt-2">
              We use this information to review your solar requirement, prepare consultation guidance,
              and follow up by call or WhatsApp regarding your request.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-black text-charcoal">Data sharing</h2>
            <p className="mt-2">
              We do not sell your personal information. Your details are only used for consultation
              and support related to your inquiry.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-black text-charcoal">Contact us</h2>
            <p className="mt-2">
              If you have any privacy questions, contact us at{" "}
              <a href={site.callHref} className="font-bold text-forest underline-offset-4 hover:underline">
                {site.callDisplay}
              </a>{" "}
              or visit our{" "}
              <Link href="/contact" className="font-bold text-forest underline-offset-4 hover:underline">
                contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
