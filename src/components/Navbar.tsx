"use client";

import { useState } from "react"; // Added for search logic
import { cn } from "@/lib/utils";
import { IoSearchOutline } from "react-icons/io5";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Megaphone, Menu, Monitor, Palette, Video, X } from "lucide-react";

import * as SheetPrimitive from "@radix-ui/react-dialog";
import Image from "next/image";
import { courseData } from "@/courseData";

// Assuming your courseData is imported here


interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  className?: string;
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
    className?: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

const Navbar = ({
  menu = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Success Story", url: "/success-story" },
    { title: "Career", url: "/career" },
    {
      title: "All Course",
      url: "/courses",
      items: [
        {
          title: "Web Design",
          description: "Master modern UI/UX and frontend development with React & Next.js.",
          icon: <Monitor className="size-5 shrink-0" />,
          url: "/courses/web-development",
        },
        {
          title: "Graphics Design",
          description: "Learn branding, typography, and professional asset creation.",
          icon: <Palette className="size-5 shrink-0" />,
          url: "/courses/graphics-design",
        },
        {
          title: "Video Editing",
          description: "High-end post-production for social media and commercial films.",
          icon: <Video className="size-5 shrink-0" />,
          url: "/courses/video-editing",
        },
        {
          title: "Digital Marketing",
          description: "Master SEO, SMM, and freelance marketplace strategies.",
          icon: <Megaphone className="size-5 shrink-0" />,
          url: "/courses/digital-marketing",
        },
      ],
    },
    { title: "Contact", url: "/contact" },
  ],
  auth = {
    login: { title: "Login", url: "#" },
    signup: { title: "Sign up", url: "#" },
  },
  className,
}: Navbar1Props) => {
  // Search Logic
  const [searchQuery, setSearchQuery] = useState("");
  const filteredCourses = courseData.filter((course) =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.courseTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className={cn("py-4 border-b border-gray-200", className)}>
      <div className="container m-auto px-4">
        {/* Desktop Menu */}
        <nav className="hidden items-center justify-between lg:flex">
          <div className="flex items-center w-full me-5 justify-between gap-6">
            {/* Logo */}
            <Link href={"/"} className="font-bold py-1 text-2xl ">
              <Image
                src={"/logo-text.png"}
                width={130}
                height={40}
                alt="brand logo"
              />
            </Link>

            {/* Desktop Search Bar */}
            <div className="relative flex-1 max-w-md group hidden xl:block">
              <div className="relative">
                <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400 group-focus-within:text-brandColor transition-colors duration-300" />
                <input
                  type="text"
                  placeholder="Search for courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-full py-2 px-10 text-sm font-medium outline-none transition-all duration-300 focus:bg-white focus:ring-4 focus:ring-brandColor/10 focus:border-brandColor group-hover:border-gray-300"
                />
              </div>

              {/* Search Results Dropdown */}
              {searchQuery.length > 0 && (
                <div className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden z-50">
                  {filteredCourses.length > 0 ? (
                    filteredCourses.map((course) => (
                      <Link
                        key={course.id}
                        href={`/courses/${course.id}`}
                        onClick={() => setSearchQuery("")}
                        className="flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors border-b last:border-none border-gray-50"
                      >
                        <div className="relative size-10 rounded-lg overflow-hidden shrink-0">
                          <Image src={course.image} alt={course.name} fill className="object-cover" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-gray-800 line-clamp-1">{course.name}</span>
                          <span className="text-xs text-gray-500 line-clamp-1">{course.courseTitle}</span>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="p-4 text-center text-sm text-gray-500">No results found</div>
                  )}
                </div>
              )}
            </div>

            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList className="text-gray-700">
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <Link href={"/"} className="font-bold py-1 text-2xl ">
              <Image
                src={"/logo-text.png"}
                width={100}
                height={40}
                alt="brand logo"
              />
            </Link>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>

              <SheetContent className="overflow-y-auto w-70">
                <SheetHeader className="border flex flex-row items-center justify-between">
                  <SheetTitle>
                    <Link href={"/"}>
                      <Image
                        src={"/logo-text.png"}
                        width={100}
                        height={40}
                        alt="brand logo"
                      />
                    </Link>
                  </SheetTitle>
                  <SheetPrimitive.Close className="p-1 bg-slate-50 text-gray-600 rounded-sm hover:text-gray-900 cursor-pointer border border-gray-50">
                    <X className="size-6" />
                  </SheetPrimitive.Close>
                </SheetHeader>

                <div className="flex flex-col gap-6 p-4">
                  {/* Mobile Search */}
                  <div className="relative">
                    <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search courses..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-gray-100 border-none rounded-lg py-2 px-9 text-sm outline-none focus:ring-2 focus:ring-brandColor/20"
                    />
                  </div>

                  <Accordion type="single" collapsible className="flex w-full flex-col gap-4">
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="flex lg:w-96 border border-gray-100 mb-3 flex-row gap-4 rounded-md p-3 no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm text-gray-600 font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-[14px] text-muted-foreground">{item.description}</p>
        )}
      </div>
    </a>
  );
};

export { Navbar };