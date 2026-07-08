import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Terms & Conditions | ForwardSun Technology",
  },
  description:
    "Read the terms for using ForwardSun Technology's website and requesting a solar consultation in Lahore.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <section className="bg-white px-4 py-16 text-charcoal sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-forest">ForwardSun Technology</p>
        <h1 className="mt-3 text-3xl font-black sm:text-4xl">Terms & Conditions</h1>
        <p className="mt-2 text-sm font-semibold text-charcoal/60">Last updated: July 8, 2026</p>

        <div className="mt-7 space-y-5 text-sm leading-7 text-charcoal/78 sm:text-base">
          <p>
            By using this website, you agree to use it for genuine consultation inquiries about
            solar solutions in Lahore.
          </p>

          <div>
            <h2 className="text-lg font-black text-charcoal">Consultation requests</h2>
            <p className="mt-2">
              When you submit the form, you confirm that the details you provide are accurate and
              relevant, including your name, phone number, area, electricity usage, and project
              details.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-black text-charcoal">Follow-up communication</h2>
            <p className="mt-2">
              By submitting your details, you allow ForwardSun Technology to contact you by call or
              WhatsApp to discuss your consultation request.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-black text-charcoal">Website content</h2>
            <p className="mt-2">
              Information on this site is provided for general guidance. Final technical
              recommendations and quotations depend on your site assessment and project requirements.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-black text-charcoal">Contact</h2>
            <p className="mt-2">
              For any questions about these terms, please call{" "}
              <a href={site.callHref} className="font-bold text-forest underline-offset-4 hover:underline">
                {site.callDisplay}
              </a>{" "}
              or use the{" "}
              <Link href="/contact" className="font-bold text-forest underline-offset-4 hover:underline">
                contact form
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
