import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Compass, ClipboardList, LayoutTemplate, Rocket } from 'lucide-react';

const workflowSteps = [
  {
    icon: <Compass className="w-10 h-10 text-primary" />,
    title: "Discover",
    description: "We start by understanding your vision, goals, and target audience. This phase involves research, analysis, and collaborative brainstorming to lay a solid foundation.",
  },
  {
    icon: <ClipboardList className="w-10 h-10 text-primary" />,
    title: "Define",
    description: "We translate our findings into a clear strategy and a detailed project plan. This includes defining the scope, features, user flows, and technical requirements.",
  },
  {
    icon: <LayoutTemplate className="w-10 h-10 text-primary" />,
    title: "Design",
    description: "Our creative team brings the vision to life with wireframes, mockups, and prototypes. We focus on creating an experience that is both visually stunning and highly intuitive.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-primary" />,
    title: "Develop",
    description: "Our developers write clean, efficient code to build a robust and scalable product. We conduct rigorous testing to ensure a seamless launch and flawless performance.",
  },
];

export function Workflow() {
  return (
    <section id="workflow" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">Our Workflow</div>
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Our Process for Success</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We follow a proven, transparent process to ensure your project is a stunning success from start to finish.
          </p>
        </div>
        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-px bg-border -translate-y-1/2 hidden md:block"></div>
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                 <div className="mb-4 bg-background border-2 border-border p-3 rounded-full z-10">
                   {step.icon}
                 </div>
                <h3 className="font-headline text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
