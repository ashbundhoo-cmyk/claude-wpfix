import { ShoppingBasket } from "lucide-react";
import { Placeholder } from "./Placeholder";

export function SupportBanners() {
  return (
    <section className="bg-foodies-body">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 pb-16 md:grid-cols-3">
        {/* 24/7 support */}
        <div className="rounded-2xl bg-foodies-theme p-6 text-foodies-header">
          <p className="font-semibold">24/7 Support center</p>
          <a href="tel:+17189044450" className="mt-1 block font-heading text-2xl font-bold">
            +1 718-904-4450
          </a>
          <Placeholder label="Burger photo" className="mt-4 h-24 w-full" />
        </div>

        {/* Special offer */}
        <div className="rounded-2xl bg-foodies-theme3 p-6 text-white">
          <span className="text-sm font-semibold">Special Menu</span>
          <h3 className="mt-1 font-heading text-2xl font-bold">Special Offer</h3>
          <p className="mt-2 text-sm text-white/85">The mouth-watering aroma of sizzling burgers now fills</p>
          <div className="mt-4 flex items-center justify-between">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-foodies-header"
            >
              Order Now <ShoppingBasket className="h-4 w-4" />
            </a>
            <span className="font-heading text-xl font-bold">
              ONLY <span className="text-foodies-theme">$19</span>
            </span>
          </div>
        </div>

        {/* Special food menu */}
        <div className="rounded-2xl bg-foodies-header p-6 text-white">
          <span className="text-sm font-semibold">Today&rsquo;s</span>
          <h3 className="mt-1 font-heading text-2xl font-bold">
            Special <span className="text-foodies-theme">Food Menu</span>
          </h3>
          <p className="mt-2 text-sm text-white/70">This Weekend Only</p>
          <a
            href="#"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-foodies-theme px-4 py-2 text-sm font-bold text-foodies-header"
          >
            Order Now <ShoppingBasket className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
