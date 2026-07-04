import Image from "next/image";

type LogoMarkProps = {
  variant?: "icon" | "full";
  className?: string;
  priority?: boolean;
  alt?: string;
};

export function LogoMark({
  variant = "full",
  className = "",
  priority = false,
  alt = "ForwardSun Technology logo",
}: LogoMarkProps) {
  if (variant === "icon") {
    return (
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-card ring-1 ring-line ${className}`}
      >
        <Image
          src="/images/forwardsun-logo.png"
          alt={alt}
          width={112}
          height={112}
          className="h-full w-full object-contain"
          priority={priority}
        />
      </span>
    );
  }

  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-2xl bg-white p-2 shadow-card ring-1 ring-line ${className}`}
    >
      <Image
        src="/images/forwardsun-logo.png"
        alt={alt}
        width={256}
        height={256}
        className="h-full w-full object-contain"
        priority={priority}
      />
    </span>
  );
}
