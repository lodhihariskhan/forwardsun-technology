import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/site";

export function FAQSection() {
  return (
    <section className="bg-mist px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-forest">FAQ</span>
          <h2 className="mt-3 text-3xl font-black text-charcoal sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base leading-7 text-charcoal/70">
            Clear answers before the assessment make the quotation process smoother.
          </p>
        </div>
        <div className="grid gap-4">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-line bg-white p-6 shadow-card open:border-lime/60 open:shadow-soft"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-bold leading-6 text-charcoal marker:hidden">
                <span>{item.question}</span>
                <ChevronDown
                  aria-hidden
                  className="mt-1 h-5 w-5 shrink-0 text-forest transition group-open:rotate-180"
                />
              </summary>
              <p className="mt-4 text-sm leading-7 text-charcoal/70">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
