import { ChevronDown, Phone, Search, ShoppingCart, User } from "lucide-react";

const NAV = [
  { label: "Home", caret: true },
  { label: "Menu", caret: false },
  { label: "Pages", caret: true },
  { label: "About", caret: false },
  { label: "Shop", caret: true },
  { label: "Blog", caret: true },
  { label: "Contact", caret: false },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Top announcement bar */}
      <div className="hidden bg-foodies-theme2 text-xs font-semibold text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <p>FREE delivery &amp; 40% Discount for next 3 orders! Place your 1st order now.</p>
          <div className="flex items-center gap-4">
            <span>Order Tracking</span>
            <span>EN</span>
            <span>USD</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <a href="#" className="font-heading text-3xl font-bold text-foodies-theme2">
          Foodies
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.label}
              href="#"
              className="flex items-center gap-1 font-semibold text-foodies-header hover:text-foodies-theme2"
            >
              {item.label}
              {item.caret && <ChevronDown className="h-4 w-4" />}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <Search className="h-5 w-5 text-foodies-header" />
          <User className="h-5 w-5 text-foodies-header" />
          <div className="relative">
            <ShoppingCart className="h-5 w-5 text-foodies-header" />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-foodies-theme3 text-[10px] text-white">
              2
            </span>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 rounded-full bg-foodies-theme2 px-5 py-2.5 font-semibold text-white"
          >
            <Phone className="h-4 w-4" />
            Order Now
          </a>
        </div>
      </div>
    </header>
  );
}
