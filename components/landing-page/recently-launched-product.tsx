import { Calendar, RocketIcon } from "lucide-react";
import SectionHeader from "../common/section-header";
import ProductCard from "../products/product-card";
// import { recentlyLaunchedProducts } from "@/data/products-data";
import EmptyState from "../common/empty-state";
import { getRecentlyLaunchedProducts } from "@/lib/products/product-select";

export default async function RecentlyLaunchedProduct() {
  const recentlyLaunchedProducts = await getRecentlyLaunchedProducts();

  // Artificial delay to test skeleton
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <section className="py-20">
      <div className="wrapper space-y-12">
        <SectionHeader
          title="Recently Launched"
          icon={RocketIcon}
          description="Discover the latest products that have been launched on the platform"
        />

        {recentlyLaunchedProducts.length > 0 ? (
          <div className="grid-wrapper">
            {recentlyLaunchedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyState
            message="No prducts launched in the last week. Check back soon for new launches!"
            icon={Calendar}
          />
        )}
      </div>
    </section>
  );
}
