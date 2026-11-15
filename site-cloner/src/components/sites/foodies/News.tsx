import { ArrowUpRight, MessageSquare, User } from "lucide-react";
import { Placeholder } from "./Placeholder";

const POSTS = [
  { day: "20", month: "JUN", title: "In Fast Food Really Getting Healthier? What You Need Know" },
  { day: "25", month: "JUN", title: "Best Fast Food Recipes You Can Easily Make at Home" },
  { day: "28", month: "JUN", title: "Fast Food Trends That Are Changing the Way We Eat" },
];

export function News() {
  return (
    <section className="bg-foodies-body">
      <div className="mx-auto max-w-7xl px-6 py-16 text-center">
        <h2 className="font-heading text-4xl font-bold text-foodies-text/70">Latest Our Insights &amp; News</h2>
        <div className="mx-auto mt-4 h-px w-40 bg-foodies-theme2" />

        <div className="mt-10 grid grid-cols-1 gap-6 text-left md:grid-cols-3">
          {POSTS.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-2xl bg-white">
              <div className="relative">
                <Placeholder label="Post photo" className="aspect-[4/3] w-full rounded-none" />
                <span className="absolute bottom-3 right-3 rounded bg-foodies-theme px-2 py-1 text-center text-xs font-bold leading-tight text-foodies-header">
                  {post.day}
                  <br />
                  {post.month}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-4 text-xs text-foodies-text">
                  <span className="flex items-center gap-1">
                    <User className="h-3.5 w-3.5" /> John Smith
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="h-3.5 w-3.5" /> Comments (3)
                  </span>
                </div>
                <h3 className="mt-3 font-heading text-lg font-bold text-foodies-header">{post.title}</h3>
                <a href="#" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-foodies-header">
                  Read More <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
