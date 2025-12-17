import { db } from "@/db";
import { products } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { connection } from "next/server";

export async function getFeaturedProducts() {
  "use cache";
  const productData = await db
    .select()
    .from(products)
    .where(eq(products.status, "approved"))
    .orderBy(desc(products.voteCount));

  return productData;
}

export async function getAllProducts() {
  const productData = await db
    .select()
    .from(products)
    .orderBy(desc(products.voteCount));

  return productData;
}

export async function getAllApprovedProducts() {
  const productData = await db
    .select()
    .from(products)
    .where(eq(products.status, "approved"))
    .orderBy(desc(products.voteCount));

  return productData;
}

export async function getRecentlyLaunchedProducts() {
  await connection();

  const productData = await getAllApprovedProducts();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  return productData.filter(
    (product) =>
      product.createdAt &&
      new Date(product.createdAt.toISOString()) >= oneWeekAgo
  );
}

export async function getProductBySlug(slug: string) {
  const productData = await db
    .select()
    .from(products)
    .where(eq(products.slug, slug));

  return productData?.[0] || null;
}
