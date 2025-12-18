"use client";

import { products } from "@/db/schema";
import { InferSelectModel } from "drizzle-orm";
import { Card, CardDescription, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Trash2Icon } from "lucide-react";
import AdminActions from "./admin-actions";
import { cn } from "@/lib/utils";
import { deleteProductActions } from "@/lib/admin/admin-actions";

type product = InferSelectModel<typeof products>;

export default function AdminProductCard({ product }: { product: product }) {
  const handleDelete = async () => {
    await deleteProductActions({ productId: product.id });
  };
  return (
    <Card className="border rounded-lg p-6 bg-background hover:shadow-md transition-shadow">
      <div className="flex-1 min-w-0 space-y-4">
        <CardTitle className="text-xl font-semibold flex justify-between items-center">
          {product.name}

          <Badge
            className={cn(
              product.status === "pending" &&
                "bg-yellow-600/10 text-yellow-600",
              product.status === "approved" && "bg-green-600/10 text-green-600",
              product.status === "rejected" && "bg-red-600/10 text-red-600"
            )}
          >
            {product.status}
          </Badge>
        </CardTitle>
        <CardDescription className="flex flex-col gap-4">
          {product.tagline}
          <div className="flex items-center gap-2">
            {product.tags?.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardDescription>
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-6 text-sm text-muted-foreground">
          <p>
            <span className="font-bold">By:</span> {product.submittedBy}
          </p>
          <p>{product.createdAt?.toLocaleDateString()}</p>
          <p>
            <a
              href={product.websiteUrl ?? ""}
              target="_blank"
              rel="noopener noreferrer"
            >
              {product.websiteUrl}
            </a>
          </p>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" onClick={handleDelete}>
            <Trash2Icon className="size-4" />
            Delete
          </Button>
          <AdminActions status={product.status ?? ""} productId={product.id} />
        </div>
      </div>

      {/* <div className="lg:shrink-0">
       
      </div> */}
    </Card>
  );
}
