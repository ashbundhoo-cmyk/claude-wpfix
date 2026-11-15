import { Flame, Sandwich, Soup, Truck } from "lucide-react";

const FEATURES = [
  {
    icon: Flame,
    title: "Testy & Spicy",
    desc: "Temperate ocean-bass sea chub unicorn treefish eulachon tidewater goby.",
    highlighted: false,
  },
  {
    icon: Sandwich,
    title: "Quality Foods",
    desc: "Temperate ocean-bass sea chub unicorn treefish eulachon tidewater goby.",
    highlighted: true,
  },
  {
    icon: Soup,
    title: "Original Recipes",
    desc: "Temperate ocean-bass sea chub unicorn treefish eulachon tidewater goby.",
    highlighted: false,
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Temperate ocean-bass sea chub unicorn treefish eulachon tidewater goby.",
    highlighted: false,
  },
];

export function Feature() {
  return (
    <section className="bg-foodies-theme4/25">
      <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((f, i) => (
          <div
            key={f.title}
            className={`p-8 ${f.highlighted ? "bg-white" : ""} ${i > 0 ? "border-t lg:border-t-0 lg:border-l border-foodies-theme4/30" : ""}`}
          >
            <div className="relative inline-flex h-12 w-12 items-center justify-center">
              <span className="absolute right-0 top-0 h-6 w-6 rounded-full bg-foodies-theme" />
              <f.icon className="relative h-8 w-8 text-foodies-header" />
            </div>
            <h3 className="mt-5 font-heading text-lg font-bold text-foodies-header">{f.title}</h3>
            <p className="mt-3 text-sm text-foodies-text">{f.desc}</p>
            {f.highlighted && (
              <a
                href="#"
                className="mt-5 inline-block rounded-full bg-foodies-theme2 px-5 py-2 text-sm font-bold text-white"
              >
                Order Now
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
