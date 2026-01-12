import { LucideIcon, Mail, Phone, Linkedin, Github, Globe } from "lucide-react";

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  points: string[];
}

export interface Project {
  name: string;
  role: string;
  description: string;
  url?: string;
}

export interface Education {
  school: string;
  degree: string;
  year: string;
}

export interface ResumeData {
  name: string;
  contact: {
    phone: string;
    email: string;
    linkedin: string;
    github: string;
  };
  experience: Experience[];
  projects: Project[];
  education: Education[];
  skills: {
    languages: string[];
    frameworks: string[];
  };
}

export const resumeData: ResumeData = {
  name: "Abbas Engineer",
  contact: {
    phone: "+1-818-912-0166",
    email: "abbasengineer01@gmail.com",
    linkedin: "www.linkedin.com/in/abbas-engineer-b53799125/",
    github: "github.com/abbasengineer",
  },
  experience: [
    {
      company: "Censys Inc.",
      role: "Senior Customer Success Engineer",
      location: "San Francisco, CA",
      period: "2024 - Present",
      points: [
        "Serve as the technical bridge between Sales, Product, and Customer Success, leading pre- and post-sales engagements to scope solutions, deliver tailored demos, and accelerate adoption.",
        "Architect and optimize multi-cloud deployments across AWS, Azure, and GCP, improving visibility and performance for assets secured by Cloudflare proxies, firewalls, and WAFs, while aligning configurations with Zero Trust and SASE best practices.",
        "Develop automation workflows using Python and RESTful APIs to streamline SSO/SAML authentication, enhance telemetry ingestion into Splunk and ServiceNow.",
        "Collaborate with Security, Network, and Infrastructure teams to analyze and optimize DNS, BGP, and TLS/SSL configurations, ensuring reliability and low latency.",
        "Lead technical enablement initiatives by creating reusable scripts, documentation, and training materials that reduced client time-to-value by 40%.",
      ],
    },
    {
      company: "Darktrace",
      role: "Senior Sales Engineer",
      location: "Los Angeles, CA",
      period: "2021 - 2024",
      points: [
        "Partnered with clients and engineering teams to design and deploy custom integrations across complex network topologies, accelerating time-to-value.",
        "Served as trusted pre-sales and post-sales technical advisor, guiding security executives on adoption of AI-powered threat detection, influencing $4M+ in net-new business.",
        "Led cross-regional enablement for Attack Surface Management (ASM) product as Subject Matter Expert, mentoring 30+ engineers.",
        "Translated client feedback into actionable product improvements, driving roadmap updates and improving customer satisfaction by 25%.",
      ],
    },
    {
      company: "Everyset Inc.",
      role: "Software Engineer - Mobile App Development",
      location: "Los Angeles, CA",
      period: "2020 - 2021",
      points: [
        "Sole developer tasked with rebuilding the mobile app as a cross-platform solution using React, React Native, and TypeScript.",
        "Redesigned core web and mobile workflows for a more intuitive UX and implemented Agile (Scrum) practices as acting Scrum Master.",
      ],
    },
  ],
  projects: [
    {
      name: "MoneyRank",
      role: "Founder & Builder",
      description:
        "Architected and developed a consumer-facing platform enabling users to evaluate and rank financial decisions (investing, debt management, insurance, housing) through interactive daily scenarios. Engineered sophisticated scoring algorithms, percentile ranking systems, and risk-grading mechanisms that provide instant, actionable feedback on decision quality and risk assessment capabilities. Launched with open access architecture and implemented optional user accounts featuring progress tracking, advanced analytics dashboards, and engagement streaks. Tech: React, TypeScript, Node.js, Supabase/Postgres, Authentication, Analytics.",
      url: "https://moneyrank.onrender.com",
    },
    {
      name: "Elite Express",
      role: "Founder & Developer",
      description:
        "Architected and developed a React Native mobile application that digitized a car wash business's operations, enabling customers to directly interact, purchase services, and manage their accounts. Transformed a fully manual process into an automated platform, resulting in a 30% increase in user engagement and improved customer experience. Implemented comprehensive features including subscription management, promotional campaigns, push notifications, and an admin dashboard for business operations. The platform streamlined the purchase flow and account management, significantly reducing friction and increasing ease of use for both customers and business operators.",
    },
    {
      name: "QueuedUp",
      role: "Product Manager & Engineer",
      description:
        "Led product design and development of a localized social networking platform for UCSC students, creating a Reddit-style community where users could create posts, threads, and join campus-specific groups to seek advice, share knowledge, and connect with peers. Managed a 4-person cross-functional team using Agile methodologies, overseeing feature prioritization, technical architecture decisions, and sprint planning. Built core functionality including user authentication, real-time post creation, threaded discussions, group management, and content moderation using ReactJS, Redux, and Firebase. The platform fostered a vibrant campus community by enabling students to discover resources, get academic and career advice, and build connections within the UCSC ecosystem.",
    },
  ],
  education: [
    {
      school: "University of California, Santa Cruz",
      degree: "Bachelor of Science, Computer Science",
      year: "2021",
    },
  ],
  skills: {
    languages: ["Java", "Javascript", "Typescript", "Python"],
    frameworks: [
      "React",
      "Node.js",
      "Django",
      "AWS",
      "Kubernetes",
      "Docker",
      "Terraform",
      "MySQL",
      "Cursor",
      "Replit",
    ],
  },
};
