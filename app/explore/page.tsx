"use cache";

import SectionHeader from "@/components/common/section-header";
import ProductExplorer from "@/components/products/product-explorer";
import { CompassIcon } from "lucide-react";
import { getAllApprovedProducts } from "@/lib/products/product-select";

export default async function ExplorePage() {
  const products = await getAllApprovedProducts();

  return (
    <div className="py-20">
      <div className="wrapper">
        <SectionHeader
          title="Explore All Products"
          description="Discover and explore all the products available on the platform."
          icon={CompassIcon}
        />

        <ProductExplorer products={products} />
      </div>
    </div>
  );
}
