import Hero from "./Hero";
import CategorySection from "./CategorySection";
import FeaturedProducts from "./FeaturedProducts";
import DealsSection from "./DealsSection";
import "../../styles/home.css";
function Home() {
  return (
    <>
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      <DealsSection />
    </>
  );
}

export default Home;