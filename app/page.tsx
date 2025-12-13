import HeroSection from "@/components/landing-page/hero-section";
import FeaturedProducts from "@/components/landing-page/featured-products";
import RecentlyLaunchedProduct from "@/components/landing-page/recently-launched-product";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <RecentlyLaunchedProduct />
    </div>
  );
}
