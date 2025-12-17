import StatCard from "@/components/admin/stat-card";
import SectionHeader from "@/components/common/section-header";
import { getAllProducts } from "@/lib/products/product-select";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { ShieldCheckIcon } from "lucide-react";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const response = await clerkClient();
  const user = await response.users.getUser(userId!);

  const metaData = user.publicMetadata;
  const isAdmin = metaData?.isAdmin ?? false;

  if (!isAdmin) {
    redirect("/");
  }

  const allProducts = await getAllProducts();

  const approvedProducts = allProducts.filter(
    (product) => product.status === "approved"
  );

  const pendingProducts = allProducts.filter(
    (product) => product.status === "pending"
  );

  const rejectedProducts = allProducts.filter(
    (product) => product.status === "rejected"
  );

  return (
    <div className="py-20">
      <div className="wrapper">
        <div className="mb-12">
          <SectionHeader
            title="Product Admin"
            description="Review and manage submitted products"
            icon={ShieldCheckIcon}
          />
        </div>
        <StatCard
          approved={approvedProducts.length}
          pending={pendingProducts.length}
          rejected={rejectedProducts.length}
          all={allProducts.length}
        />
      </div>
    </div>
  );
}
