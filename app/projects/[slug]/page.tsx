import { notFound } from 'next/navigation';
import ProjectPageClient from './ProjectPageClient';

// Enhanced project data with additional details for individual pages
const projectsData = {
  'aksioma-tver-clinic': {
    id: 1,
    title: "Aksioma Tver Clinic",
    slug: "aksioma-tver-clinic",
    date: "July 2025",
    duration: "4 months",
    team: "Solo Project",
    status: "Completed",
    image: "/project2-thumb.png",
    images: [
      "/project2-thumb.png",
      "/project2-thumb.png",
      "/project2-thumb.png",
      "/project2-thumb.png",
      "/project2-thumb.png"
    ],
    shortDescription: "A modern and responsive website with complex content management system for a large clinic in Tver, Russia.",
    fullDescription: `Aksioma Tver Clinic represents a comprehensive digital transformation for one of Tver's largest medical facilities. This project involved creating a sophisticated web platform that serves both patients and medical staff with seamless functionality and intuitive design.

The website features a modern, accessible design that prioritizes user experience for all age groups. The platform includes advanced appointment booking systems, patient portals, and comprehensive information about medical services. The content management system allows clinic staff to easily update service information, doctor profiles, and medical articles.

Built with cutting-edge technologies, the platform ensures fast loading times, excellent SEO performance, and robust security for handling sensitive medical information. The authentication system provides secure access for patients to view their appointments and medical records while maintaining strict privacy compliance.`,
    technologies: ["Next.js", "TypeScript", "NextAuth", "MongoDB", "TailwindCSS", "Shadcn/UI", "React", "Mongoose", "SEO"],
    features: [
      "Patient Appointment Booking System",
      "Secure User Authentication & Patient Portals",
      "Content Management System for Medical Staff",
      "Doctor Profiles & Service Information",
      "Medical Article Publishing System",
      "Responsive Design for All Devices",
      "SEO Optimization for Medical Services",
      "Multi-language Support (Russian/English)",
      "Contact Forms & Communication Tools",
      "Medical Records Security Compliance"
    ],
    challenges: [
      "Implementing secure patient data handling with GDPR compliance",
      "Creating an intuitive appointment booking system with conflict prevention",
      "Building a flexible CMS for non-technical medical staff",
      "Ensuring fast performance with large amounts of medical content",
      "Integrating complex medical service categorization"
    ],
    learnings: [
      "Healthcare web development best practices and regulations",
      "Advanced MongoDB schema design for medical data",
      "NextAuth implementation for secure patient authentication",
      "Content management system architecture for non-technical users",
      "SEO optimization strategies for medical websites"
    ],
    githubUrl: "-",
    liveUrl: "https://aksioma-tver.ru"
  },
  'car-wash-city-group': {
    id: 2,
    title: "Car Wash City Group",
    slug: "car-wash-city-group", 
    date: "April 2025",
    duration: "6 months",
    team: "Solo Project",
    status: "Completed",
    image: "/project1-thumb.png",
    images: [
      "/project1-thumb.png",
      "/project1-thumb.png",
      "/project1-thumb.png",
      "/project1-thumb.png",
      "/project1-thumb.png"
    ],
    shortDescription: "A modern and responsive website for a largest hand car wash network in Slovakia. With a complex reservation system and admin panel with business automatization functionalities",
    fullDescription: `Car Wash City Group represents the digital transformation of Slovakia's largest hand car wash network. This comprehensive platform revolutionizes the car wash industry by providing customers with seamless online booking experiences while empowering business owners with powerful automation tools.

The platform features an advanced reservation system that allows customers to book services across multiple locations, select specific time slots, and choose from various service packages. The intelligent scheduling system prevents conflicts and optimizes resource allocation across all locations.

The admin panel provides comprehensive business management tools including real-time analytics, automated customer communications, staff scheduling, and revenue tracking. Integration with communication services ensures customers receive timely notifications about their appointments via SMS and email, creating a professional and reliable service experience.`,
    technologies: ["Next.js", "React", "TailwindCSS", "Supabase", "PostgreSQL", "Resend", "Twilio", "React Hook Form", "Zod", "SEO"],
    features: [
      "Multi-location Reservation System",
      "Real-time Availability Checking",
      "Automated SMS & Email Notifications",
      "Customer Management Dashboard",
      "Service Package Configuration",
      "Staff Scheduling & Management",
      "Revenue Analytics & Reporting",
      "Mobile-responsive Booking Interface",
      "Payment Integration & Processing",
      "SEO-optimized Location Pages"
    ],
    challenges: [
      "Building a complex multi-location booking system with real-time availability",
      "Integrating multiple communication channels (SMS, Email) reliably",
      "Creating an intuitive admin interface for non-technical staff",
      "Implementing robust form validation and error handling",
      "Optimizing database queries for real-time availability checks"
    ],
    learnings: [
      "Advanced Supabase features including real-time subscriptions",
      "Integration of multiple third-party services (Twilio, Resend)",
      "Complex form handling with React Hook Form and Zod validation",
      "Business process automation and workflow optimization",
      "PostgreSQL database design for booking systems"
    ],
    githubUrl: "-",
    liveUrl: "https://carwashcitygroup.sk"
  },
  'artroom-design-studio': {
    id: 3,
    title: "Artroom Design Studio",
    slug: "artroom-design-studio",
    date: "September 2023", 
    duration: "3 months",
    team: "Solo Project",
    status: "Completed",
    image: "/project3-thumb.png",
    images: [
      "/project3-thumb.png",
      "/project3-thumb.png",
      "/project3-thumb.png",
      "/project3-thumb.png",
      "/project3-thumb.png",
      "/project3-thumb.png"
    ],
    shortDescription: "A modern and responsive website with content management system for a design studio in Slovakia.",
    fullDescription: `Artroom Design Studio represents a creative showcase platform built for a premier design studio in Slovakia. This project focused on creating an elegant, visually stunning website that effectively presents the studio's portfolio while providing robust content management capabilities for easy updates.

The website features a carefully crafted design that reflects the studio's creative aesthetic, with smooth animations, elegant typography, and a responsive layout that works beautifully across all devices. The content management system allows the design team to easily upload new projects, update portfolio pieces, and manage client testimonials.

Built with traditional web technologies enhanced with modern development practices, the platform includes advanced image optimization, SEO features, and fast loading times. The custom CMS provides an intuitive interface for non-technical users while maintaining the flexibility needed for creative content presentation.`,
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB", "Mongoose", "EJS", "Multer", "Cloudinary", "SEO"],
    features: [
      "Custom Content Management System",
      "Portfolio Showcase with Image Galleries",
      "Responsive Design & Mobile Optimization",
      "Image Upload & Management with Cloudinary",
      "SEO Optimization for Design Services",
      "Contact Forms & Client Inquiries",
      "Admin Dashboard for Content Updates",
      "Fast Loading & Performance Optimization",
      "Social Media Integration",
      "Multi-language Support (Slovak/English)"
    ],
    challenges: [
      "Creating a custom CMS tailored for creative content management",
      "Implementing efficient image upload and optimization workflows",
      "Building responsive galleries that showcase design work effectively",
      "Balancing visual aesthetics with fast loading performance",
      "Developing an intuitive admin interface for creative professionals"
    ],
    learnings: [
      "Full-stack JavaScript development with Node.js and Express",
      "MongoDB database design and Mongoose ODM implementation",
      "Image processing and cloud storage integration with Cloudinary",
      "Server-side rendering with EJS templating engine",
      "Custom CMS development and user experience design"
    ],
    githubUrl: "https://github.com/ex10101/artroom-sk",
    liveUrl: "https://artroom-design.com"
  }
};

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData[slug as keyof typeof projectsData];

  if (!project) {
    notFound();
  }

  return <ProjectPageClient project={project} />;
}



// Generate static params for all projects
export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug,
  }));
}