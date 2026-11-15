import { cn } from "@/lib/utils";

/** Swap-me image slot. Replace with a real <img>/<Image> once real photography is ready. */
export function Placeholder({
  label,
  className,
  tone = "light",
}: {
  label: string;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-2xl border-2 border-dashed text-center text-sm font-semibold",
        tone === "light"
          ? "border-foodies-theme4/60 bg-foodies-theme4/10 text-foodies-text"
          : "border-white/30 bg-white/5 text-white/70",
        className
      )}
    >
      {label}
    </div>
  );
}
