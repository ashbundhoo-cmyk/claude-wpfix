import { Placeholder } from "./Placeholder";

const CARDS = [
  { title: "Burger", name: "Beef Burger", price: "$19-$39", bg: "bg-foodies-theme" },
  { title: "Quesadilla", name: "Quesadilla", price: "$19-$39", bg: "bg-foodies-theme3" },
  { title: "Italian", name: "Italian Food", price: "$19-$39", bg: "bg-foodies-header" },
];

export function ShopBanner() {
  return (
    <section className="bg-foodies-body">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-10 md:grid-cols-3">
        {CARDS.map((card) => (
          <div key={card.title} className={`overflow-hidden rounded-2xl ${card.bg} p-6 text-white`}>
            <p className="font-semibold">{card.price}</p>
            <h3 className="font-heading text-2xl font-bold">{card.name}</h3>
            <Placeholder label={`${card.title} photo`} tone="dark" className="mt-4 h-32 w-full" />
          </div>
        ))}
      </div>
    </section>
  );
}
