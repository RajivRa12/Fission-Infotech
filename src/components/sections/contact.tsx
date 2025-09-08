import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">Contact Us</div>
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have a project in mind? We'd love to hear from you.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-muted rounded-md p-3 flex-shrink-0">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-headline font-semibold">Email</h3>
                <p className="text-muted-foreground">Send us an email for inquiries or project proposals.</p>
                <a href="mailto:hello@rajiv.replica" className="text-primary hover:underline">
                  hello@rajiv.replica
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-muted rounded-md p-3 flex-shrink-0">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-headline font-semibold">Phone</h3>
                <p className="text-muted-foreground">Give us a call to discuss your needs.</p>
                <a href="tel:+15551234567" className="text-primary hover:underline">
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-muted rounded-md p-3 flex-shrink-0">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-headline font-semibold">Office</h3>
                <p className="text-muted-foreground">123 Creative Lane, Suite 100<br/>Design City, DC 54321</p>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
              </div>
              <Input placeholder="Subject" />
              <Textarea placeholder="Your Message" rows={6} />
              <Button type="submit" className="w-full" size="lg">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
