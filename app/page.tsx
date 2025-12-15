import HeroSection from "@/components/landing-page/hero-section";
import FeaturedProducts from "@/components/landing-page/featured-products";
import RecentlyLaunchedProduct from "@/components/landing-page/recently-launched-product";
import { Suspense } from "react";
import ProductSkeleton from "@/components/products/product-skeleton";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />

      <Suspense fallback={<ProductSkeleton />}>
        <RecentlyLaunchedProduct />
      </Suspense>
    </div>
  );
}
