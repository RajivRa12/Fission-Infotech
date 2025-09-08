
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "CEO, Tech Innovators",
    quote: "Working with this team was a game-changer for our brand. Their design sense is impeccable, and the final product exceeded all our expectations. Highly recommended!",
    avatar: "SJ",
    imageUrl: "https://picsum.photos/100/100?random=4",
    rating: 5,
  },
  {
    name: "Michael Chen",
    title: "Founder, Creative Co.",
    quote: "The best design agency we've ever partnered with. They are true professionals who are passionate about their craft. Our new website has received nothing but compliments.",
    avatar: "MC",
    imageUrl: "https://picsum.photos/100/100?random=5",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    title: "Marketing Director, Future Group",
    quote: "Their attention to detail and creative approach to our branding was outstanding. The team was responsive, collaborative, and delivered a stunning result on time.",
    avatar: "ER",
    imageUrl: "https://picsum.photos/100/100?random=6",
    rating: 5,
  },
];

const Rating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1 text-yellow-400">
    {[...Array(rating)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-current" />
    ))}
  </div>
);

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">Testimonials</div>
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We're proud to have partnered with amazing clients. Here's what they think of our work.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-secondary flex flex-col">
              <CardContent className="p-6 flex-grow flex flex-col">
                <Rating rating={testimonial.rating} />
                <blockquote className="mt-4 text-muted-foreground flex-grow">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
              <div className="p-6 pt-0 mt-auto flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.imageUrl} alt={testimonial.name} data-ai-hint="person face" />
                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold font-headline">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
