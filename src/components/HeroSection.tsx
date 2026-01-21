import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HeroSection = ({ className }: { className?: string }) => {
  const badge = "Freelance Academy";
  // const heading = "Master Digital Skills in Chattogram";
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
    <section className={cn("lg:py-10", className)}>
      <div
        className="max-w-6xl pb-8 lg:py-4 border border-slate-200 bg-linear-to-b sm:px-10 from-[#F5F7FF] via-[#fff1ee] to-[#E6EFFF] lg:rounded-4xl  m-auto "
      >
        <div className="grid p-5 items-center gap-4 lg:grid-cols-2 lg:gap-12">
          {/* content  */}

          <div className="lg:order-first  order-last  lg:gap-3 flex flex-col  items-center  ">

            <div className="flex text-center   justify-center lg:justify-start pt-3 pb-1 w-full">
              <Badge variant="outline" className="p-1 px-4">
                {badge}
                <ArrowUpRight className=" size-4" />
              </Badge>
            </div>

            <div className="text-3xl lg:text-start text-center font-bold bg-linear-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent  lg:text-5xl">

              <h1> Master Digital<span className="bg-linear-to-r from-red-500 to-blue-600 bg-clip-text text-transparent"> Skills in Chattogram</span> </h1>

            </div>

            <p className="lg:max-w-xl t  py-4 text-[14px] lg:text-start text-center text-gray-700 lg:text-lg">
              {description}
            </p>

            <div className="w-full  flex py-3 items-center lg:justify-start justify-center gap-5">

              <Button asChild className=" sm:w-auto">
                <Link href={"/courses"}>{buttons.primary.text}</Link>
              </Button>

              <Button asChild variant="outline" className=" sm:w-auto">
                <Link href={"/join-seminar"}>
                  {buttons.secondary.text}
                  <ArrowRight className="size-4" />
                </Link>
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
              className="rounded-2xl shadow-md object-cover"
            />
          </div>


        </div>

      </div>
    </section>
  );
};

export { HeroSection };
