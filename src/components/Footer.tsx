import { cn } from "@/lib/utils";
import Link from "next/link";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface Footer2Props {
  className?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer = ({
  className,
  menuItems = [
    {
      title: "Courses",
      links: [
        { text: "Web Design & Development", url: "#" },
        { text: "Graphics Design", url: "#" },
        { text: "Video Editing", url: "#" },
        { text: "Digital Marketing", url: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About Us", url: "#" },
        { text: "Success Stories", url: "#" },
        { text: "Seminar Schedule", url: "#" },
        { text: "Contact", url: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Help Center", url: "#" },
        { text: "Student Blog", url: "#" },
        { text: "Free Workshop", url: "#" },
      ],
    },
    {
      title: "Social",
      links: [
        { text: "Facebook", url: "#" },
        { text: "Instagram", url: "#" },
        { text: "LinkedIn", url: "#" },
      ],
    },
  ],
  copyright = "© 2026 Freelance Academy. All rights reserved.",
  bottomLinks = [
    { text: "Terms and Conditions", url: "#" },
    { text: "Privacy Policy", url: "#" },
  ],
}: Footer2Props) => {
  return (
    <section className={cn("lg:py-16 py-5 pb-10 border-t border-gray-100", className)}>

      <div className="container m-auto px-4">

        <footer>

          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <Link href={"/"} className="font-bold text-2xl">
                  Freelance A
                </Link>
              </div>
              <p className="mt-4 text-muted-foreground">
                Chattogram's leading IT training center. We provide industry-standard 
                skills in Web Development, Graphics, and Digital Marketing to help you 
                start your freelance career.
              </p>
              <p className="mt-4 font-bold text-primary">Chattogram, Bangladesh</p>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary transition-colors"
                    >
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col justify-between gap-2 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
            {/* Colorful 2026 Copyright */}
            <p className="text-gray-500">
              {copyright}
            </p>

            <ul className="flex gap-4 items-center justify-center  ">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="underline hover:text-primary transition-colors">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>

          </div>


        </footer>
      </div>

    </section>
  );
};

export { Footer };