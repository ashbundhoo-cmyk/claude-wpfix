import { ShoppingBasket } from "lucide-react";
import { Placeholder } from "./Placeholder";

export function DiscountBanner() {
  return (
    <section className="bg-foodies-header">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2">
        <Placeholder label="Pizza photo + 50% off badge" tone="dark" className="aspect-[4/3] w-full" />

        <div className="text-center md:text-left">
          <h2 className="font-heading text-5xl font-bold text-white/15">HAPPY SUNDAY</h2>
          <p className="mt-4 text-white/70">
            Secret family recipes are the stuff of legends and Stack burger blend is no exception.
          </p>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-foodies-theme px-7 py-3 font-bold text-foodies-header"
          >
            Order Now <ShoppingBasket className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
