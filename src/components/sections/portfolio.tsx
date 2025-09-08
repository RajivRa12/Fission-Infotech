import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Project Alpha",
    category: "Branding",
    imageUrl: "https://picsum.photos/600/400?random=1",
    tags: ["UI/UX", "Identity"],
    hint: "abstract shapes",
  },
  {
    title: "Project Beta",
    category: "Web Development",
    imageUrl: "https://picsum.photos/600/400?random=2",
    tags: ["Next.js", "Tailwind"],
    hint: "laptop code",
  },
  {
    title: "Project Gamma",
    category: "UI/UX Design",
    imageUrl: "https://picsum.photos/600/400?random=3",
    tags: ["Figma", "Mobile"],
    hint: "mobile app",
  },
];

export function Portfolio() {
  return (
    <section id="work" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">Our Work</div>
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A glimpse into the brands and products we've helped create.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden group">
              <CardContent className="p-0">
                <div className="relative h-60 w-full">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={project.hint}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-headline text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.category}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
