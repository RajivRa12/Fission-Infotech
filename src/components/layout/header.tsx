"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { name: "Work", href: "#work" },
  { name: "Services", href: "#services" },
  { name: "Workflow", href: "#workflow" },
  { name: "About Us", href: "#about" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Blog", href: "#" },
  { name: "Careers", href: "#" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [sheetOpen, setSheetOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeSheet = () => setSheetOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b border-border/40 bg-background/80 backdrop-blur-lg"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-20 max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-headline text-2xl font-bold tracking-widest text-foreground">
            RAJIV
          </span>
        </Link>

        <nav className="hidden md:flex">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
            <Button variant="default" className="hidden sm:flex rounded-full bg-primary hover:bg-primary/80" asChild>
                <Link href="#contact">Let's Talk</Link>
            </Button>
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-lg font-semibold"
                  onClick={closeSheet}
                >
                  <span className="font-headline text-2xl font-bold tracking-widest text-foreground">RAJIV</span>
                </Link>
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground"
                    onClick={closeSheet}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button variant="default" className="rounded-full bg-primary hover:bg-primary/80" asChild>
                    <Link href="#contact" onClick={closeSheet}>Let's Talk</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
