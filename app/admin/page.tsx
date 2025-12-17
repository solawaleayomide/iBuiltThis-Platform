import AdminProductCard from "@/components/admin/admin-product-card";
import StatCard from "@/components/admin/stat-card";
import EmptyState from "@/components/common/empty-state";
import SectionHeader from "@/components/common/section-header";
import { getAllProducts } from "@/lib/products/product-select";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { InboxIcon, ShieldCheckIcon } from "lucide-react";
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

        <section className="my-12">
          <div className="section-header-with-count">
            <h2 className="text-2xl font-bold">
              Pending Products ({pendingProducts.length})
            </h2>
          </div>
          <div>
            {pendingProducts.length === 0 && (
              <EmptyState
                message="No pending products to review"
                icon={InboxIcon}
              />
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pendingProducts.map((product) => (
                <AdminProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        <section className="my-12">
          <div className="section-header-with-count">
            <h2 className="text-2xl font-bold">
              All Products ({allProducts.length})
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {allProducts.map((product) => (
              <AdminProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
