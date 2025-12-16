import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { ChevronDownIcon, ChevronUpIcon, StarIcon } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { products } from "@/db/schema";
import { InferSelectModel } from "drizzle-orm";
import VotingButton from "./voting-button";

// interface ProductProps {
//   id?: number;
//   name: string;
//   description: string;
//   tags: string[];
//   votes: number;
//   isFeatured: boolean;
// }

type product = InferSelectModel<typeof products>;

export default function ProductCard({ product }: { product: product }) {
  const hasVoted = false;

  return (
    <Link href={`/product/${product.slug}`}>
      <Card className="group card-hover hover:bg-primary-foreground/10 border-solid border-gray-400 h-full">
        <CardHeader className="flex-1">
          <div className="flex items-start gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-4">
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {product.name}
                </CardTitle>
                {product.voteCount > 10 && (
                  <Badge className="gap-1 bg-primary text-primary-foreground">
                    <StarIcon className="size-3 fill-current" /> Featured
                  </Badge>
                )}
              </div>
              <CardDescription>{product.description}</CardDescription>
            </div>

            {/* Voting button */}
            <VotingButton
              voteCount={product.voteCount}
              hasVoted={hasVoted}
              productId={product.id}
            />
          </div>
        </CardHeader>

        <CardFooter>
          <div className="flex items-center gap-2">
            {product.tags?.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
