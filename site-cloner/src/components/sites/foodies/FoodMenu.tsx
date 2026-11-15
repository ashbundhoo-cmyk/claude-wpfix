import { Placeholder } from "./Placeholder";

const TABS = ["Burger Pizza", "Pizza", "Fast Food", "Drinks"];

const LEFT = [
  { name: "Cheesy Beef Nachos", price: "$29" },
  { name: "Grilled Chicken Sub", price: "$29" },
  { name: "Cheesy Garlic Cream", price: "$29" },
  { name: "Spicy Beef Burrito", price: "$29" },
  { name: "Happy Lunch Combo", price: "$29" },
];

const RIGHT = [
  { name: "Spicy Chicken Nuggets", price: "$29" },
  { name: "Deluxe Club Sandwich", price: "$29" },
  { name: "Crunchy Fish Burger", price: "$29" },
  { name: "Classic Chicken Tacos", price: "$29" },
  { name: "Crispy Onion Rings", price: "$29" },
];

function MenuColumn({ items }: { items: { name: string; price: string }[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item.name} className="flex items-center gap-4 rounded-xl bg-white p-3">
          <Placeholder label="" className="h-14 w-14 shrink-0 rounded-full" />
          <span className="flex-1 font-semibold text-foodies-header">{item.name}</span>
          <span className="font-bold text-foodies-theme2">{item.price}</span>
        </li>
      ))}
    </ul>
  );
}

export function FoodMenu() {
  return (
    <section className="bg-foodies-body">
      <div className="mx-auto max-w-7xl px-6 py-16 text-center">
        <p className="font-semibold text-foodies-theme2">Menu</p>
        <h2 className="mt-2 font-heading text-4xl font-bold text-foodies-header">Our Best Foods Menus</h2>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {TABS.map((tab, i) => (
            <button
              key={tab}
              className={`rounded-full px-5 py-2 text-sm font-semibold ${
                i === 0 ? "bg-foodies-theme2 text-white" : "bg-white text-foodies-header"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 text-left md:grid-cols-2">
          <MenuColumn items={LEFT} />
          <MenuColumn items={RIGHT} />
        </div>
      </div>
    </section>
  );
}
