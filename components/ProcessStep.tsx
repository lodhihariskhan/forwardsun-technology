type ProcessStepProps = {
  step: {
    title: string;
    description: string;
  };
  index: number;
};

export function ProcessStep({ step, index }: ProcessStepProps) {
  return (
    <li className="group flex min-h-40 gap-4 rounded-2xl border border-line bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:border-lime/60 hover:shadow-soft">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sunsoft text-sm font-black text-forest shadow-sm ring-1 ring-solar/25 transition group-hover:bg-forest group-hover:text-white">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <h3 className="text-base font-black text-charcoal">{step.title}</h3>
        <p className="mt-2 text-sm leading-6 text-charcoal/68">
          {step.description}
        </p>
      </div>
    </li>
  );
}
