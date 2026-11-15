import { Placeholder } from "./Placeholder";

export function Contact() {
  return (
    <section className="bg-foodies-body">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <h2 className="font-heading text-4xl font-bold text-foodies-text/70">Contact for Order</h2>
          <div className="mt-4 h-px w-32 bg-foodies-theme2" />
          <p className="mt-5 border-l-4 border-foodies-theme pl-4 text-sm text-foodies-text">
            Temperate ocean-bass sea chub unicorn fish treefish eulachon Flier, bighe carp Devario shortnose sucker
            platy smalleye
          </p>

          <p className="mt-6 text-sm text-foodies-text">24/7 Support center</p>
          <a href="tel:+17189044450" className="font-heading text-3xl font-bold text-foodies-theme2">
            +1 718-904-4450
          </a>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-foodies-theme p-5">
              <p className="font-bold text-foodies-header">Headquater -</p>
              <p className="mt-1 text-sm text-foodies-header/80">4517 Washington Ave. Manchester, Kentucky 39495</p>
            </div>
            <div className="rounded-xl bg-white p-5">
              <p className="font-bold text-foodies-header">Email Us -</p>
              <p className="mt-1 text-sm text-foodies-text">hellofodies@gmail.com</p>
              <p className="text-sm text-foodies-text">fodies@gmail.com</p>
            </div>
          </div>
        </div>

        <Placeholder label="Fries + chicken bowl photo" className="aspect-square w-full" />
      </div>
    </section>
  );
}
