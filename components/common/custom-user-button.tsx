"use client";

import {
  OrganizationSwitcher,
  UserButton,
  ClerkLoaded,
  ClerkLoading,
} from "@clerk/nextjs";
import { BuildingIcon } from "lucide-react";

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
        </UserButton>
      </ClerkLoaded>
    </>
  );
}
