"use client";

import { ClockIcon, SearchIcon, TrendingUpIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import ProductCard from "./product-card";
import { InferSelectModel } from "drizzle-orm";
import { products } from "@/db/schema";
import { useMemo, useState } from "react";

type Product = InferSelectModel<typeof products>;

export default function ProductExplorer({ products }: { products: Product[] }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    if (searchQuery.length > 0) {
      return products.filter((product) => {
        return product.name.toLowerCase().includes(searchQuery.toLowerCase());
      });
    } else {
      return products;
    }
  }, [searchQuery, products]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <div className="flex-1 relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search products..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
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

      <p className="text-muted-foreground font-semibold mb-4">
        Showing all {filteredProducts.length} products
      </p>
      <div className="grid-wrapper">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
