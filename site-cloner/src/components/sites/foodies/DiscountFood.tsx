import { Placeholder } from "./Placeholder";

const CARDS = [
  { eyebrow: "50% Offer", title: "We Need To Offer", bg: "bg-foodies-theme2" },
  { eyebrow: "Today's Special", title: "Food Menu", bg: "bg-foodies-theme" },
  { eyebrow: "Chef Special", title: "Chessey Pizza", bg: "bg-foodies-theme5" },
];

export function DiscountFood() {
  return (
    <section className="bg-foodies-header">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-14 md:grid-cols-3">
        {CARDS.map((card) => (
          <div key={card.title} className={`rounded-2xl ${card.bg} p-6 text-white`}>
            <p className="font-semibold">{card.eyebrow}</p>
            <h3 className="font-heading text-2xl font-bold">{card.title}</h3>
            <a href="#" className="mt-4 inline-block rounded-full bg-white px-5 py-2 text-sm font-bold text-foodies-header">
              Order Now
            </a>
            <Placeholder label="Promo photo" tone="dark" className="mt-4 h-28 w-full" />
          </div>
        ))}
      </div>
    </section>
  );
}
