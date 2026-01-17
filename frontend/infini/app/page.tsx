import Hero from "./components/Hero";
import CategoryList from "./components/CategoryList";
import FeaturedProducts from "./components/FeaturedProducts";
import PromoBanner from "./components/PromoBanner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="space-y-0">
      <Hero />
      <CategoryList />
      <FeaturedProducts />
      <PromoBanner />
      <Footer/>
    </div>
  );
}
