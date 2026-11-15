import { Star } from "lucide-react";
import { Placeholder } from "./Placeholder";

const REVIEWS = [
  { name: "Esther Howard", role: "Customer" },
  { name: "Esther Howard", role: "Customer" },
  { name: "Esther Howard", role: "Customer" },
];

export function Testimonial() {
  return (
    <section className="bg-foodies-body">
      <div className="mx-auto max-w-7xl px-6 py-16 text-center">
        <h2 className="font-heading text-4xl font-bold text-foodies-text/70">Our Clients Testimonials</h2>
        <div className="mx-auto mt-4 h-px w-40 bg-foodies-theme2" />

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <div key={i} className="rounded-3xl rounded-bl-none bg-white p-6 text-left shadow-sm">
              <div className="flex gap-1 text-foodies-theme">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} className="flex h-6 w-6 items-center justify-center rounded bg-foodies-theme3">
                    <Star className="h-3.5 w-3.5 fill-white text-white" />
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-foodies-text">
                &ldquo;Make a type specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining.&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3">
                <Placeholder label="" className="h-10 w-10 rounded-full" />
                <div>
                  <p className="text-sm font-bold text-foodies-header">{r.name}</p>
                  <p className="text-xs text-foodies-text">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
