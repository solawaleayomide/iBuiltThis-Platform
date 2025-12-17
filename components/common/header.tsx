"use client";

import {
  CompassIcon,
  HomeIcon,
  LoaderIcon,
  SparkleIcon,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { Suspense, useState } from "react";
import CustomUserButton from "./custom-user-button";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
        <SparkleIcon className="size-4 text-primary-foreground" />
      </div>
      <span className="text-xl font-bold">
        i<span className="text-primary">Built</span>This
      </span>
    </Link>
  );
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60  ">
      <div className="wrapper px-4 md:px-12">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          {/* --- Desktop Navigation (Hidden on Mobile) --- */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50 rounded-md"
            >
              <HomeIcon className="size-4" />
              <span>Home</span>
            </Link>
            <Link
              href="/explore"
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50 rounded-md"
            >
              <CompassIcon className="size-4" />
              <span>Explore</span>
            </Link>
          </nav>

          {/* --- Desktop Auth Buttons (Hidden on Mobile) --- */}
          <div className="hidden md:flex items-center gap-3">
            <AuthButtons />
          </div>

          {/* --- Mobile Menu Toggle --- */}
          <div className="flex items-center gap-2 md:hidden">
            {/* We show the UserButton on mobile always for quick access */}
            <SignedIn>
              <CustomUserButton />
            </SignedIn>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-muted-foreground hover:text-foreground"
            >
              {isMobileMenuOpen ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Dropdown Menu --- */}
      {isMobileMenuOpen && (
        <div className="md:hidden   p-4 bg-background space-y-4 shadow-lg absolute w-full left-0">
          <nav className="flex flex-col gap-2">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-3 text-sm font-medium hover:bg-muted/50 rounded-md"
            >
              <HomeIcon className="size-4" />
              <span>Home</span>
            </Link>
            <Link
              href="/explore"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-3 text-sm font-medium hover:bg-muted/50 rounded-md"
            >
              <CompassIcon className="size-4" />
              <span>Explore</span>
            </Link>
          </nav>

          <div className="flex flex-col gap-2 pt-2  ">
            {/* We wrap AuthButtons in a div to stack them vertically on mobile */}
            <div className="flex flex-col gap-2 w-full">
              <AuthButtons mobile />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

// Reusable Auth Component to avoid code duplication
function AuthButtons({ mobile }: { mobile?: boolean }) {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center">
          <LoaderIcon className="size-4 animate-spin" />
        </div>
      }
    >
      <SignedOut>
        <div className={`flex ${mobile ? "flex-col" : "items-center"} gap-2`}>
          <SignInButton>
            <Button
              variant="ghost"
              className={mobile ? "w-full justify-start" : ""}
            >
              Sign In
            </Button>
          </SignInButton>
          <SignUpButton>
            <Button className={mobile ? "w-full" : ""}>Sign Up</Button>
          </SignUpButton>
        </div>
      </SignedOut>

      <SignedIn>
        <Button asChild className={mobile ? "w-full" : ""}>
          <Link href="/submit">
            <SparkleIcon className="size-4 mr-2" /> Submit Project
          </Link>
        </Button>
        {/* On Desktop, UserButton is here. On Mobile, we moved it to the top bar. */}
        {!mobile && <CustomUserButton />}
      </SignedIn>
    </Suspense>
  );
}
