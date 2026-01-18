import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero1 = ({ className }: { className?: string }) => {
  const badge = "Your Website";
  const heading = "Blocks Built With Shadcn & Tailwind";
  const description = "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.";
  const buttons = {
    primary: {
      text: "Discover all components",
      url: "#",
    },
    secondary: {
      text: "View on GitHub",
      url: "#",
    },
  };

  return (
    <section className={cn("py-32", className)}>
      <div className="container m-auto px-4">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="gap-5 flex flex-col items-center text-center lg:items-start lg:text-left">
            <Badge variant="outline">
              {badge}
              <ArrowUpRight className="ml-2 size-4" />
            </Badge>

            <h1 className="text-4xl font-bold text-pretty lg:text-6xl">
              {heading}
            </h1>

            <p className="max-w-xl text-muted-foreground lg:text-xl">
              {description}
            </p>

            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button asChild className="w-full sm:w-auto">
                <a href={buttons.primary.url}>{buttons.primary.text}</a>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <a href={buttons.secondary.url}>
                  {buttons.secondary.text}
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
          </div>

          <Image 
            width={850} 
            height={450} 
            alt="hero image" 
            src="/hero image.jpeg"
            priority
            className="rounded-md object-cover" 
          />
        </div>
      </div>
    </section>
  );
};

export { Hero1 };