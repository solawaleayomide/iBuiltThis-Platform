import { ClockIcon, TrendingUpIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { getAllProducts } from "@/lib/products/product-select";
import ProductCard from "./product-card";

export default async function ProductExplorer() {
  const products = await getAllProducts();
  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <div className="flex-1 relative">
          <Input />
        </div>

        <div className="flex gap-2">
          <Button variant="outline">
            <TrendingUpIcon className="size-4" /> Trending
          </Button>
          <Button>
            <ClockIcon className="size-4" /> Recent
          </Button>
        </div>
      </div>
      <div className="grid-wrapper">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
