import SectionHeader from "@/components/common/section-header";
import ProductExplorer from "@/components/products/product-explorer";
import { CompassIcon } from "lucide-react";

export default function ExplorePage() {
  return (
    <div className="py-20">
      <div className="wrapper">
        <SectionHeader
          title="Explore All Products"
          description="Discover and explore all the products available on the platform."
          icon={CompassIcon}
        />

        <ProductExplorer />
      </div>
    </div>
  );
}
