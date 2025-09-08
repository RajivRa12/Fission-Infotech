import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Palette, Code, PenTool, Search, Megaphone, Bot } from 'lucide-react';

const services = [
  {
    icon: <Palette className="w-8 h-8 text-accent" />,
    title: "UI/UX Design",
    description: "Crafting intuitive and beautiful user interfaces that are a joy to use. We focus on user-centric design principles to create engaging digital experiences.",
  },
  {
    icon: <Code className="w-8 h-8 text-accent" />,
    title: "Web Development",
    description: "Building fast, scalable, and secure web applications. From marketing sites to complex platforms, we write clean and efficient code.",
  },
  {
    icon: <PenTool className="w-8 h-8 text-accent" />,
    title: "Branding & Identity",
    description: "Creating memorable brand identities that tell your story. We help you stand out with a unique logo, color palette, and visual language.",
  },
  {
    icon: <Search className="w-8 h-8 text-accent" />,
    title: "SEO & Strategy",
    description: "Improving your visibility on search engines and developing a content strategy that drives organic traffic and conversions.",
  },
  {
    icon: <Megaphone className="w-8 h-8 text-accent" />,
    title: "Digital Marketing",
    description: "Executing targeted marketing campaigns across various digital channels to reach your audience and achieve your business goals.",
  },
  {
    icon: <Bot className="w-8 h-8 text-accent" />,
    title: "AI Integration",
    description: "Leveraging the power of artificial intelligence to automate processes, enhance user experiences, and unlock new possibilities.",
  },
];

export function Services() {
  return (
    <section id="services" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">Our Services</div>
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">What We Do</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We provide a complete suite of digital services to help your business grow from idea to launch and beyond.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="bg-background shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="gap-4">
                {service.icon}
                <div className="space-y-1">
                  <CardTitle className="font-headline">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
