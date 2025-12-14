import HeroSection from "@/components/landing-page/hero-section";
import FeaturedProducts from "@/components/landing-page/featured-products";
import RecentlyLaunchedProduct from "@/components/landing-page/recently-launched-product";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />

      <Suspense fallback={<div>Loading ... Recently Launched Product</div>}>
        <RecentlyLaunchedProduct />
      </Suspense>
    </div>
  );
}
