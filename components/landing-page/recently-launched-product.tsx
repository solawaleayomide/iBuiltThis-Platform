import { Calendar, RocketIcon } from "lucide-react";
import SectionHeader from "../common/section-header";
import ProductCard from "../products/product-card";
import { recentlyLaunchedProducts } from "@/data/products-data";
import EmptyState from "../common/empty-state";

export default function RecentlyLaunchedProduct() {
  return (
    <div className="py-20">
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
            message="No prducts launched in the last 24 hours. Check back soon for new launches!"
            icon={Calendar}
          />
        )}
      </div>
    </div>
  );
}
