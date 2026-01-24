import { 
  MdVideoLibrary, MdOutlineMotionPhotosOn, MdBrush, MdCode, 
  MdRecordVoiceOver, MdTrendingUp, MdSchool, MdWork, 
  MdLaptopMac, MdBusinessCenter, MdGroups, MdEventSeat,
  MdRocketLaunch, MdOutlineAssignmentInd, MdEditNote, 
  MdQuestionAnswer, MdAutoAwesome, MdLayers, MdTerminal, MdPublic 
} from 'react-icons/md';

export const academyData = {
  about: {
    title: "ABOUT THE ACADEMY",
    content: "Freelance Academy is a professional IT skill training institute focused on building real world freelance careers. We don't just teach software we train students with market ready skills, real projects, and freelancing guidance so they can work with global clients and build sustainable income."
  },

  whyChoose: {
    title: "WHY CHOOSE FREELANCE ACADEMY?",
    items: [
      "Live Practical Classes", "Real Project Based Learning", "Industry-Expert Trainers",
      "After-Course Career Support", "Practice Lab Support", "Freelancing Marketplace Support",
      "Internship Opportunity", "Recorded Class Videos", "Review & Practice Sessions",
      "Lifetime Community Support"
    ],
    motto: "We focus on results, not theory."
  },
  
  courses: {
    title: "COURSES WE OFFER",
    list: [
      { name: "Professional Video Editing", icon: <MdVideoLibrary /> },
      { name: "Motion Graphics", icon: <MdOutlineMotionPhotosOn /> },
      { name: "Graphic Design", icon: <MdBrush /> },
      { name: "Web Design & Development", icon: <MdCode /> },
      { name: "Freelancing & Client Communication", icon: <MdRecordVoiceOver /> },
      { name: "Freelancing Career Track Programme", icon: <MdTrendingUp /> }
    ],
    note: "Beginner to Advanced Level Courses Available"
  },
  whoCanJoin: {
    title: "WHO CAN JOIN?",
    roles: [
      { name: "Students", icon: <MdSchool /> },
      { name: "Job Holders", icon: <MdWork /> },
      { name: "Freelancers", icon: <MdLaptopMac /> },
      { name: "Entrepreneurs", icon: <MdBusinessCenter /> }
    ],
    note: "Anyone serious about building a digital career"
  },
  admission: {
    title: "ADMISSION INFORMATION",
    details: [
      { text: "Batch-Based Admission", icon: <MdGroups />, color: "text-blue-500" },
      { text: "Limited Seats per Batch", icon: <MdEventSeat />, color: "text-red-400" }
    ]
  },
  support: {
    title: "CAREER & FREELANCING SUPPORT",
    subtitle: "We guide you beyond the classroom",
    items: [
      { text: "Freelancing Marketplace Setup (Fiverr, Upwork, etc.)", icon: <MdRocketLaunch /> },
      { text: "Profile Optimization Guidance", icon: <MdOutlineAssignmentInd /> },
      { text: "Proposal Writing Support", icon: <MdEditNote /> },
      { text: "Client Communication Training", icon: <MdQuestionAnswer /> },
      { text: "Portfolio & Personal Branding Support", icon: <MdAutoAwesome /> }
    ],
    goal: "Our goal is to help you start earning, not just finish a course"
  },
  framework: {
    title: "OUR CAREER-FOCUSED LEARNING FRAMEWORK",
    steps: [
      { id: "Step 1", label: "Skill Foundation", title: "Tool mastery with guided practice Strong fundamentals based on real market demand", icon: <MdLayers /> },
      { id: "Step 2", label: "Real-World Practice", title: "Industry-level and client-style projects Hands-on assignments", icon: <MdTerminal /> },
      { id: "Step 3", label: "Global Freelancing Preparation", title: "Introduction to Freelancing Marketplaces Client communication & professional guidelines", icon: <MdPublic /> },
      { id: "Step 4", label: "Career Growth Support", title: "Client handling & work delivery guidance, Income scaling strategies, Long-term freelance career planning", icon: <MdTrendingUp /> }
    ]
  },
  signature: {
    title: "FREELANCING CAREER TRACK PROGRAMME",
    badge: "Our Signature & Special Programme",
    content: "The Freelancing Career Track Programme is a structured, step-by-step career roadmap designed for students who want to build a long-term freelancing career. This program focuses on skill development + freelancing mindset + income generation, guiding students from beginner level to real client work."
  }
};