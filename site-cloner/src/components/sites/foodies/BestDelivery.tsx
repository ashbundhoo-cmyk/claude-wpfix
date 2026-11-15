import { ShoppingBasket } from "lucide-react";
import { Placeholder } from "./Placeholder";

export function BestDelivery() {
  return (
    <section className="bg-foodies-body">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-semibold text-foodies-theme2">Best Delivery</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-foodies-text/70">
            Choose what you want, select a pick up time
          </h2>
          <div className="mt-4 h-px w-32 bg-foodies-theme2" />
          <p className="mt-5 text-sm text-foodies-text">
            As well known and we are very busy all days advice you. advice you to call us of before arriving, so we
            can guarantee your seat.
          </p>
        </div>

        <div className="text-center">
          <Placeholder label="Delivery scooter illustration" className="mx-auto aspect-square w-full max-w-xs" />
          <a
            href="#"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-foodies-theme px-6 py-3 font-bold text-foodies-header"
          >
            Order Now <ShoppingBasket className="h-4 w-4" />
          </a>
        </div>

        <div className="text-right">
          <p className="font-semibold text-foodies-theme2">&nbsp;</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-foodies-text/70">
            Earn points every time you order online
          </h2>
          <div className="ml-auto mt-4 h-px w-32 bg-foodies-theme2" />
          <p className="mt-5 text-sm text-foodies-text">We have global customer of agriculturel products</p>
          <div className="mt-3 flex items-center justify-end -space-x-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-foodies-theme2 text-xs font-bold text-white">
              78+
            </span>
            <Placeholder label="" className="h-10 w-10 rounded-full" />
            <Placeholder label="" className="h-10 w-10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
