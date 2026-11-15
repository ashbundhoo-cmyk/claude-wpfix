import { BestDelivery } from "@/components/sites/foodies/BestDelivery";
import { ComboBanner } from "@/components/sites/foodies/ComboBanner";
import { Contact } from "@/components/sites/foodies/Contact";
import { DiscountBanner } from "@/components/sites/foodies/DiscountBanner";
import { DiscountFood } from "@/components/sites/foodies/DiscountFood";
import { Feature } from "@/components/sites/foodies/Feature";
import { Footer } from "@/components/sites/foodies/Footer";
import { FoodMenu } from "@/components/sites/foodies/FoodMenu";
import { Header } from "@/components/sites/foodies/Header";
import { Hero } from "@/components/sites/foodies/Hero";
import { News } from "@/components/sites/foodies/News";
import { ShopBanner } from "@/components/sites/foodies/ShopBanner";
import { ShopCategory } from "@/components/sites/foodies/ShopCategory";
import { SupportBanners } from "@/components/sites/foodies/SupportBanners";
import { Testimonial } from "@/components/sites/foodies/Testimonial";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ShopBanner />
        <ShopCategory />
        <DiscountFood />
        <FoodMenu />
        <ComboBanner />
        <Feature />
        <Testimonial />
        <SupportBanners />
        <BestDelivery />
        <DiscountBanner />
        <Contact />
        <News />
      </main>
      <Footer />
    </>
  );
}
