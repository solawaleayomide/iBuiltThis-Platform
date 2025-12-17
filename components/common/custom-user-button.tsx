"use client";

import {
  OrganizationSwitcher,
  UserButton,
  ClerkLoaded,
  ClerkLoading,
} from "@clerk/nextjs";
import { Building2Icon, BuildingIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function CustomUserButton() {
  return (
    <>
      {/* 1. Show a placeholder while Clerk loads to prevent layout shift */}
      <ClerkLoading>
        <div className="size-8 rounded-full bg-slate-200 animate-pulse" />
      </ClerkLoading>

      {/* 2. Only render the actual UserButton once Clerk is ready */}
      <ClerkLoaded>
        <UserButton>
          <UserButton.UserProfilePage
            label="Organizations"
            url="/organizations"
            labelIcon={<BuildingIcon className="size-4" />}
          >
            <div className="p-4">
              <h2 className="mb-4 font-semibold">Manage Organization</h2>
              <OrganizationSwitcher
                hidePersonal={true}
                afterCreateOrganizationUrl={"/submit"}
                afterSelectPersonalUrl={"/submit"}
                appearance={{
                  elements: {
                    rootBox: "w-full",
                    organizationSwitcherTrigger:
                      "w-full justify-between border border-gray-200 rounded-md p-2",
                  },
                }}
              />
            </div>
          </UserButton.UserProfilePage>
          <UserButton.UserProfilePage
            label="Admin"
            url="admin"
            labelIcon={<Building2Icon className="size-4" />}
          >
            <div className="p-4">
              <h2 className="mb-4 font-semibold">Admin Panel</h2>
              <Link href="/admin" className="w-full justify-start">
                <Button size="default" className="w-full justify-start">
                  Go to Admin Panel
                </Button>
              </Link>
            </div>
          </UserButton.UserProfilePage>
        </UserButton>
      </ClerkLoaded>
    </>
  );
}
