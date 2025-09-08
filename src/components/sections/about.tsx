import Image from "next/image";

const stats = [
    { value: "50+", label: "Happy Clients" },
    { value: "120+", label: "Projects Completed" },
    { value: "8", label: "Years of Experience" },
    { value: "15", label: "Team Members" },
];

export function About() {
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container max-w-7xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">About Us</div>
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl mt-2">
              A Passionate Team of Digital Innovators
            </h2>
            <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              We are a collective of designers, developers, and strategists who are passionate about creating meaningful digital products. Our collaborative approach ensures that we are not just a service provider, but a true partner in our clients' success.
            </p>
            <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Our mission is to combine design thinking with cutting-edge technology to craft experiences that are not only beautiful but also functional and impactful.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                    <div key={stat.label}>
                        <p className="text-4xl font-bold font-headline text-accent">{stat.value}</p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                ))}
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://picsum.photos/600/600"
              alt="Team"
              width={500}
              height={500}
              className="rounded-xl object-cover shadow-lg"
              data-ai-hint="team collaboration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
