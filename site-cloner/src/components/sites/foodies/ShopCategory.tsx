import { Star } from "lucide-react";
import { Placeholder } from "./Placeholder";

const PRODUCTS = [
  { name: "Cheese Pizza", price: "$19" },
  { name: "Crispy Chicken Burger", price: "$19" },
  { name: "Pepperoni Burger", price: "$19" },
  { name: "Classic Beef Pizza", price: "$19" },
  { name: "BBQ Chicken Wings", price: "$19" },
];

export function ShopCategory() {
  return (
    <section className="bg-foodies-body">
      <div className="mx-auto max-w-7xl px-6 py-16 text-center">
        <p className="font-semibold text-foodies-theme2">Our Delicious Fast Foods</p>
        <h2 className="mt-2 font-heading text-4xl font-bold text-foodies-header">
          You never worry about delicious food &amp; healthy food
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {PRODUCTS.map((p) => (
            <div key={p.name} className="rounded-2xl bg-white p-5 shadow-sm">
              <Placeholder label={p.name} className="aspect-square w-full rounded-full" />
              <div className="mt-3 flex justify-center gap-0.5 text-foodies-theme">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <h3 className="mt-1 text-sm font-semibold text-foodies-header">{p.name}</h3>
              <p className="font-bold text-foodies-theme2">{p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
