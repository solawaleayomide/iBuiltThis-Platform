import { CheckIcon, XCircleIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  approveProductActions,
  rejectProductActions,
} from "@/lib/admin/admin-actions";

export default function AdminActions({
  status,
  productId,
}: {
  status: string;
  productId: number;
}) {
  const handleApprove = async () => {
    await approveProductActions({ productId });
  };

  const handleReject = async () => {
    await rejectProductActions({ productId });
  };
  return (
    <div className="space-y-2">
      {status === "pending" && (
        <div className="flex gap-2">
          <Button
            variant="default"
            className="hover:cursor-pointer"
            onClick={handleApprove}
          >
            <CheckIcon className="size-4" />
            Approve
          </Button>
          <Button
            variant="destructive"
            className="hover:cursor-pointer"
            onClick={handleReject}
          >
            <XCircleIcon className="size-4" />
            Reject
          </Button>
        </div>
      )}
    </div>
  );
}
