import Link from "next/link";
import { Mountain, Twitter, Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-secondary text-secondary-foreground py-12">
      <div className="container max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Mountain className="h-6 w-6" />
            <span className="font-headline text-xl font-bold">
              RAJIV Replica
            </span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Creative solutions for modern brands.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-headline font-semibold">Quick Links</h4>
          <Link href="#home" className="text-sm text-muted-foreground hover:text-foreground">Home</Link>
          <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground">Services</Link>
          <Link href="#work" className="text-sm text-muted-foreground hover:text-foreground">Work</Link>
          <Link href="#workflow" className="text-sm text-muted-foreground hover:text-foreground">Workflow</Link>
          <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground">About</Link>
          <Link href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground">Testimonials</Link>
          <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-headline font-semibold">Services</h4>
          <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground">UI/UX Design</Link>
          <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground">Branding</Link>
          <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground">Web Development</Link>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-headline font-semibold">Contact</h4>
          <a href="mailto:hello@rajiv.replica" className="text-sm text-muted-foreground hover:text-foreground">hello@rajiv.replica</a>
          <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
        </div>
      </div>
      <div className="container max-w-7xl mt-8 pt-8 border-t">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} RAJIV Replica. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
