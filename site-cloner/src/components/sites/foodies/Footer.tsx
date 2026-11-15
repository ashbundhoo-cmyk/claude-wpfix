import { Globe, MessageSquareShare, Send, Share2 } from "lucide-react";

const HOURS = [
  { day: "Monday - Friday", time: "9:00 - 22:00" },
  { day: "Saturday", time: "9:00 - 23:00" },
  { day: "Sunday", time: "10:00 - 22:00" },
];

const PRODUCTS = ["Burgers", "Pizza", "Fast Food", "Drinks", "Combo Deals"];
const POSTS = [
  "In Fast Food Really Getting Healthier?",
  "Best Fast Food Recipes You Can Easily Make",
  "Fast Food Trends That Are Changing the Way We Eat",
];

export function Footer() {
  return (
    <footer className="bg-foodies-theme2 text-white">
      {/* Newsletter */}
      <div className="border-b border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
          <div>
            <p className="font-heading text-2xl font-bold">Newsletter</p>
            <p className="mt-1 text-sm text-white/70">Subscribe to get the latest offers straight to your inbox.</p>
          </div>
          <form className="flex w-full max-w-md overflow-hidden rounded-full bg-white">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-5 py-3 text-sm text-foodies-header outline-none"
            />
            <button
              type="submit"
              className="flex items-center gap-2 bg-foodies-theme px-5 py-3 text-sm font-bold text-foodies-header"
            >
              Subscribe <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Columns */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-heading text-2xl font-bold">Foodies</p>
          <p className="mt-3 text-sm text-white/70">
            Multipurpose restaurant &amp; fast food template — design reference only.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-lg font-bold">Opening Hours</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {HOURS.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-lg font-bold">Our Products</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {PRODUCTS.map((p) => (
              <li key={p}>
                <a href="#">{p}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-lg font-bold">Recent Posts</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {POSTS.map((p) => (
              <li key={p}>
                <a href="#">{p}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-white/70 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Foodies. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Globe className="h-4 w-4" />
            <Share2 className="h-4 w-4" />
            <MessageSquareShare className="h-4 w-4" />
          </div>
        </div>
      </div>
    </footer>
  );
}
