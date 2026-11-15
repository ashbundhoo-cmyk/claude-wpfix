import { Placeholder } from "./Placeholder";

const STATS = [
  { value: "43", label: "Years of Experience" },
  { value: "13", label: "Expert Chefs" },
  { value: "51", label: "Menu Items" },
  { value: "35", label: "Awards Won" },
];

export function ComboBanner() {
  return (
    <section className="bg-foodies-theme2">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <h2 className="font-heading text-4xl font-bold text-white">The Best Quality for Combo Burger</h2>
          <div className="mt-8 grid grid-cols-4 gap-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-heading text-3xl font-bold text-foodies-theme">{s.value}</p>
                <p className="mt-1 text-xs text-white/80">{s.label}</p>
              </div>
            ))}
          </div>
          <a
            href="#"
            className="mt-8 inline-block rounded-full bg-foodies-theme px-7 py-3 font-bold text-foodies-header"
          >
            Order Now
          </a>
        </div>
        <Placeholder label="Combo burger + pizza photo" tone="dark" className="aspect-[4/3] w-full" />
      </div>
    </section>
  );
}
