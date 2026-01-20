

export interface Course {
  id: string;
  name: string;
  courseTitle: string;
  overview: string;
  stats: {
    classes: string;
    projects: string;
  };
  image: string;
  price: {
    regular: number;
    sale?: number;
    currency: string;
  };
  facilities: string[];
  targetAudience: string[];
  skillsOutcome: string[];
  futureRoles?: string[]; 
  status: "details" | "upcoming";
}



export const courseData: Course[] = [
  {
    id: "digital-marketing",
    name: "Full Stack Digital Marketing",
    courseTitle: "Master Digital Growth & Freelancing",
    overview:
      "A career-focused program designed to prepare students for real-world digital marketing roles. We focus on hands-on learning, real projects, and global marketplace strategies.",
    stats: { classes: "30 Live Classes", projects: "5 Marketing Campaigns" },
    image: "/course-image/digital.webp",
    price: { regular: 20000, sale: 10000, currency: "BDT" },
    facilities: [
      "Online Live Batch & Review Classes",
      "Practice Lab Support",
      "Internship Opportunities",
      "Job & Freelancing Guidance",
    ],
    targetAudience: [
      "Students building a digital marketing career",
      "Business owners promoting their own brand",
      "Beginners with no prior marketing experience",
    ],
    skillsOutcome: [
      "Create and manage professional ad campaigns",
      "Generate leads through SEO and Organic Social",
      "Work with local and international clients",
    ],
    futureRoles: [
      "Digital Marketing Executive",
      "Social Media Marketer",
      "SEO & Ads Specialist",
    ],
    status: "details",
  },
  {
    id: "web-development",
    name: "Full Stack Web Development",
    courseTitle: "Modern Web Engineering with MERN Stack",
    overview:
      "Master the art of building scalable, high-performance web applications using React, Next.js, and Node.js. This course takes you from basic HTML/CSS to deploying complex full-stack projects.",
    stats: { classes: "40 Live Classes", projects: "8 Real-world Projects" },
    image: "/course-image/web-desing.webp",
    price: { regular: 20000, sale: 12000, currency: "BDT" },
    facilities: [
      "Online Live Batch & Review Sessions",
      "GitHub & Vercel Deployment Support",
      "Advanced Code Review by Experts",
      "Internship Opportunities",
      "Job & Freelancing Marketplace Guidance",
    ],
    targetAudience: [
      "Students aiming for Software Engineering roles",
      "Freelancers looking for high-paying coding contracts",
      "Beginners ready to switch to a Tech career",
    ],
    skillsOutcome: [
      "Build responsive UIs using Tailwind CSS & Shadcn UI",
      "Develop secure Full-Stack apps with MongoDB",
      "Master API Integration and Database Management",
    ],
    futureRoles: [
      "Frontend Developer",
      "MERN Stack Developer",
      "Full Stack Engineer",
    ],
    status: "details",
  },
  {
    id: "graphics-design",
    name: "Professional Graphics Design",
    courseTitle: "Visual Branding & UI/UX Design",
    overview:
      "Learn to communicate ideas through visual content. This course covers fundamental design theory to advanced branding and UI/UX layouts using Adobe Photoshop, Illustrator, and Figma.",
    stats: { classes: "32 Live Classes", projects: "10 Portfolio Projects" },
    image: "/course-image/graphic.webp",
    price: { regular: 18000, sale: 12000, currency: "BDT" },
    facilities: [
      "Design Critique & Feedback Sessions",
      "Access to Premium Asset Libraries",
      "Portfolio Building on Behance & Dribbble",
      "Freelance Account Setup Assistance",
    ],
    targetAudience: [
      "Creative individuals pursuing a design career",
      "Social Media Managers needing visual skills",
      "Freelancers targeting design marketplaces",
    ],
    skillsOutcome: [
      "Master Professional Branding and Logo Design",
      "Create high-fidelity UI/UX for Web & Mobile",
      "Apply Color Theory and Typography professionally",
    ],
    futureRoles: [
      "UI/UX Designer",
      "Brand Identity Specialist",
      "Graphic Designer",
    ],
    status: "details",
  },
  {
    id: "video-editing",
    name: "Advanced Video Editing",
    courseTitle: "Motion Graphics & Cinematic Post-Production",
    overview:
      "Transform raw footage into compelling stories. Master Adobe Premiere Pro and After Effects to create high-quality content for YouTube, commercial ads, and films.",
    stats: { classes: "28 Live Classes", projects: "6 Major Projects" },
    image: "/course-image/video.webp",
    price: { regular: 16000, sale: 12000, currency: "BDT" },
    facilities: [
      "Access to Stock Footage & SFX Library",
      "Cinematic Color Grading Workshops",
      "YouTube Growth & Monetization Guide",
      "Internship with Media Agencies",
    ],
    targetAudience: [
      "Aspiring YouTubers and Content Creators",
      "Filmmakers and Motion Designers",
      "Freelancers targeting Video Marketplaces",
    ],
    skillsOutcome: [
      "Expertise in Multi-cam and Story-based Editing",
      "Create high-end Motion Graphics and VFX",
      "Master Professional Sound Design & Sync",
    ],
    futureRoles: [
      "Professional Video Editor",
      "Motion Graphics Artist",
      "Content Strategist",
    ],
    status: "details",
  },
  {
    id: "social-media-management",
    name: "Social Media Management",
    courseTitle: "Strategic Brand Growth & Management",
    overview:
      "Learn to manage professional brand accounts and master social algorithms to drive organic growth and engagement.",
    stats: { classes: "20 Live Classes", projects: "4 Brand Strategies" },
    image: "/course-image/Social.webp",
    price: { regular: 12000, sale: 8000, currency: "BDT" },
    facilities: [
      "Content Planning Templates",
      "Platform Algorithm Insights",
      "Ad Manager Setup",
    ],
    targetAudience: [
      "Brand Owners",
      "Small Business Managers",
      "Aspiring SMMs",
    ],
    skillsOutcome: [
      "Master Content Scheduling",
      "Drive Viral Growth",
      "Analytics Reporting",
    ],

   
    status: "upcoming",
  },
  {
    id: "app-development",
    name: "App Development",
    courseTitle: "Cross-Platform Apps with Flutter",
    overview:
      "Build high-performance, beautiful mobile applications for both Android and iOS using a single codebase.",
    stats: { classes: "35 Live Classes", projects: "3 Play Store Apps" },
    image: "/course-image/App.webp",
    price: { regular: 25000, sale: 15000, currency: "BDT" },
    facilities: [
      "Native API Integration",
      "UI Animation Workshops",
      "Store Deployment Guide",
    ],
    targetAudience: ["Tech Students", "Entrepreneurs", "CS Graduates"],
    skillsOutcome: [
      "Master Dart & Flutter",
      "State Management",
      "Firebase Integration",
    ],
    status: "upcoming",
  },
];
