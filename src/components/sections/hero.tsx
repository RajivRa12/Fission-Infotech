import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative w-full h-screen min-h-[700px] flex items-center justify-center text-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="https://cdn.rajivstudio.com/wp-content/uploads/2023/11/29140356/1-1.mp4"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 container max-w-5xl px-4">
        <div className="animate-fade-in-up">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
            WE ARE A <span className="text-primary">UI/UX DESIGN</span> & BRANDING AGENCY
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 text-balance">
            RAJIV Studio is an award-winning UI/UX design and branding agency that empowers startups and businesses to create remarkable digital products and brands.
          </p>
        </div>
        <div className="flex justify-center gap-6 items-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <Button size="lg" className="rounded-full px-8" asChild>
            <Link href="#work">View Our Work</Link>
          </Button>
          <Button size="lg" variant="ghost" className="rounded-full group" asChild>
            <Link href="#">
                <PlayCircle className="w-8 h-8 mr-2 text-primary transition-transform group-hover:scale-110" />
                Play Reel
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
