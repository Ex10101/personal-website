export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sergey Davidovich",
    "jobTitle": "Full Stack Developer",
    "description": "Full Stack Developer specializing in Next.js, React, TypeScript, and modern web technologies",
    "url": "https://davidovich-dev.vercel.app",
    "sameAs": [
      "https://github.com/ex10101",
      // Add my other social media profiles here
    ],
    "knowsAbout": [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "TailwindCSS",
      "Web Development",
      "Full Stack Development"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full Stack Developer",
      "description": "Building scalable web applications with modern technologies"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 