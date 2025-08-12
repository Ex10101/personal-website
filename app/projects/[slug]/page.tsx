import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ProjectPageClient from './ProjectPageClient';

// Enhanced project data with additional details for individual pages
const projectsData = {
  'aksioma-tver-clinic': {
    id: 1,
    title: "Aksioma Tver Clinic",
    slug: "aksioma-tver-clinic",
    date: "July 2025",
    duration: "4 months",
    team: "Team of 2",
    status: "Completed",
    image: "/project2-thumb.png",
    images: [
      "/aksioma-1.png",
      "/aksioma-2.png",
      "/aksioma-3.png",
      "/aksioma-4.png"
    ],
    shortDescription: "A modern and responsive website with complex content management system for a large clinic in Tver, Russia.",
    fullDescription: `Aksioma Tver Clinic represents a comprehensive digital transformation for one of Tver's largest medical facilities. The main task was to transfer the website from Wordpress to Next.js and create a complex content management system for non-technical medical staff. This project involved creating a sophisticated web platform that serves both patients and medical staff with seamless functionality and intuitive design.

The website features a modern, accessible design that prioritizes user experience for all age groups. The platform integrates with existing appointment booking systems and provides comprehensive information about medical services. The content management system allows clinic staff to easily update service information, doctor profiles, and medical articles.

Built with cutting-edge technologies, the platform ensures fast loading times, excellent SEO performance, and robust security for handling sensitive medical information. The authentication system provides secure access for clinic staff to manage content while maintaining strict privacy compliance.`,
    technologies: ["Next.js", "TypeScript", "NextAuth", "MongoDB", "TailwindCSS", "Shadcn/UI", "React", "Mongoose", "SEO"],
    features: [
      "Patient Appointment Booking System Integration",
      "Secure Admin Authentication",
      "Content Management System for Medical Staff",
      "Doctor Profiles & Service Information",
      "Medical Article Publishing System",
      "Responsive Design for All Devices",
      "SEO Optimization",
      "Contact Forms & Communication Tools"
    ],
    challenges: [
      "Bulding a complex content management system for non-technical medical staff",
      "Transfering the website from Wordpress to Next.js without losing any functionality and content",
      "Optimizing the website for SEO",
      "Ensuring easy to use UI/UX for all age groups",
      "Integrating complex medical service and doctors categorization"
    ],
    learnings: [
      "Healthcare web development best practices and regulations",
      "Advanced MongoDB schema design for medical data",
      "NextAuth implementation for secure admin authentication",
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
    team: "Team of 2",
    status: "Completed",
    image: "/project1-thumb.png",
    images: [
      "/carwash-1.png",
      "/carwash-2.png",
      "/carwash-3.png",
      "/carwash-4.png",
      "/carwash-5.png"
    ],
    shortDescription: "A modern and responsive website for a largest hand car wash network in Bratislava, Slovakia. With a complex reservation system and admin panel with business automatization functionalities",
    fullDescription: `Car Wash City Group represents the digital transformation of Slovakia's largest hand car wash network. This comprehensive platform provides customers with seamless online booking experiences while empowering business owners with powerful automation tools.

The task was to modernize the existing website's design, transfer it to Next.js to ensure faster loading times, excellent SEO performance and implement a complex reservation system and admin panel with business automatization functionalities. The platform features an advanced reservation system that allows customers to book services across multiple locations, select specific time slots, and choose from various service packages. The intelligent scheduling system prevents conflicts and optimizes resource allocation across all locations.

The admin panel provides comprehensive business management tools including real-time analytics, automated customer communications, staff scheduling, and revenue tracking. Integration with communication services ensures customers receive timely notifications about their appointments via SMS and email, creating a professional and reliable service experience.`,
    technologies: ["Next.js", "React", "TailwindCSS", "Supabase", "PostgreSQL", "Resend", "Twilio", "React Hook Form", "Zod", "SEO"],
    features: [
      "Multi-location Reservation System",
      "Real-time Availability Checking",
      "Automated SMS & Email Notifications",
      "Workers Management Dashboard",
      "Content Management System",
      "Revenue Analytics & Reporting",
      "Mobile-responsive Booking Interface",
      "SEO Optimization"
    ],
    challenges: [
      "Building a complex multi-location booking system with real-time availability",
      "Integrating multiple communication channels (SMS, Email) reliably",
      "Creating an intuitive admin interface for non-technical staff",
      "Implementing robust form validation and error handling",
      "Optimizing database queries for real-time availability checks"
    ],
    learnings: [
      "Using Supabase for database and authentication",
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
    duration: "2 months",
    team: "Solo Project",
    status: "Completed",
    image: "/project3-thumb.png",
    images: [
      "/artroom-1.png",
      "/artroom-2.png",
      "/artroom-3.png"
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
      "Developing an intuitive admin interface for creative professionals",
      "Implement a multi-language support"
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

// Generate metadata for each project page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData[slug as keyof typeof projectsData];

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    };
  }

  return {
    title: project.title,
    description: project.shortDescription,
    keywords: [
      ...project.technologies,
      'Web Development',
      'Project Portfolio',
      'Full Stack Development',
      project.title,
    ],
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      type: 'article',
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.shortDescription,
      images: [project.image],
    },
  };
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