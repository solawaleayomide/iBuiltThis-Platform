"use server";

import { db } from "@/db";
import { products } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { success } from "zod";

export const approveProductActions = async ({
  productId,
}: {
  productId: number;
}) => {
  try {
    await db
      .update(products)
      .set({ status: "approved", approvedAt: new Date() })
      .where(eq(products.id, productId));

    revalidatePath("/admin");

    return {
      success: true,
      message: "Product approved successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Failed to approve product",
    };
  }
};

export const rejectProductActions = async ({
  productId,
}: {
  productId: number;
}) => {
  try {
    await db
      .update(products)
      .set({ status: "rejected", approvedAt: new Date() })
      .where(eq(products.id, productId));

    revalidatePath("/admin");

    return {
      success: true,
      message: "Product rejected successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Failed to reject product",
    };
  }
};

export const deleteProductActions = async ({
  productId,
}: {
  productId: number;
}) => {
  try {
    await db.delete(products).where(eq(products.id, productId));

    revalidatePath("/admin");

    return {
      success: true,
      message: "Product deleted successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Failed to delete product",
    };
  }
};
