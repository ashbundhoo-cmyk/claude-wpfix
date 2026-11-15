import { ShoppingCart } from "lucide-react";
import { Placeholder } from "./Placeholder";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-foodies-header">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-24 md:grid-cols-2">
        <div>
          <p className="font-semibold text-foodies-theme2">Medium 3-topping* Pizza</p>
          <h1 className="mt-3 font-heading text-5xl font-bold leading-tight text-white md:text-6xl">
            TASTY FOOD &amp;
            <br />
            <span className="text-foodies-theme">PIZZA</span>
          </h1>
          <p className="mt-5 font-semibold uppercase tracking-wide text-white/80">
            Ham, green peppers, pineapple, smoked bacon
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-foodies-theme px-7 py-3.5 font-bold text-foodies-header"
          >
            Order Now
            <ShoppingCart className="h-4 w-4" />
          </a>
        </div>

        <Placeholder label="Hero pizza photo" tone="dark" className="aspect-square w-full" />
      </div>

      <div className="flex items-center justify-center gap-2 pb-6">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`h-2 rounded-full ${i === 1 ? "w-6 bg-foodies-theme" : "w-2 bg-white/30"}`}
          />
        ))}
      </div>
    </section>
  );
}
