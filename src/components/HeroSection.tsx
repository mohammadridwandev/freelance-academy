import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection = ({ className }: { className?: string }) => {
  const badge = "Freelance Academy Chattogram";
  const heading = "Master Digital Skills in Chattogram";
  const description =
    "Advance your career with expert-led training in Web Development, Graphics Design, Video Editing, and Digital Marketing.";

  const buttons = {
    primary: {
      text: "Explore Course",
      url: "#",
    },
    secondary: {
      text: "Join Seminar",
      url: "#",
    },
  };

  return (
    <section className={cn("lg:py-16", className)}>
      <div className="container m-auto ">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          {/* content  */}
          <div className="lg:order-first order-last px-4 gap-5 flex flex-col items-center  lg:items-start lg:text-left">
            
            <div className="flex items-start w-full">

              <Badge variant="outline" className="p-1 px-4">
                {badge}
                <ArrowUpRight className=" size-4" />
              </Badge>
              
            </div>

            <h1 className="text-3xl font-bold text-pretty lg:text-6xl">
              {heading}
            </h1>

            <p className="max-w-xl text-muted-foreground lg:text-xl">
              {description}
            </p>

            <div className="w-full flex items-center gap-5">
              <Button asChild className=" sm:w-auto">
                <a href={buttons.primary.url}>{buttons.primary.text}</a>
              </Button>

              <Button asChild variant="outline" className=" sm:w-auto">
                <a href={buttons.secondary.url}>
                  {buttons.secondary.text}
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>


          </div>

          {/* hero image */}
          <div className="lg:order-last order-first">
            <Image
              width={850}
              height={450}
              alt="hero image"
              src="/hero image.jpeg"
              priority
              className="lg:rounded-sm object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export { HeroSection };
