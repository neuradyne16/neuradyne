import { StaticImageData } from "next/image";

export interface SiteConfig {
  header: {
    logo: StaticImageData;
    logoAlt: string;
    navLinks: Array<{
      label: string;
      href: string;
    }>;
  };
  hero: {
    slogan: string;
    headerContent: string;
    headerImage: StaticImageData;
    headerImageAlt: string;
  };
  services: {
    title: string;
    items: Array<{
      title: string;
      image?: StaticImageData;
      content: string;
      // Optional description of tech stack used for this service
      techStack?: string;
      viewWorkLink: string;
    }>;
  };
  partners: {
    title: string;
    logos: Array<{
      src: StaticImageData;
      alt: string;
    }>;
  };
  activities: {
    title: string;
    introContent: string;
    items: Array<{
      title: string;
      content: string;
      image?: StaticImageData;
      readMoreLink: string;
    }>;
  };
  blog: {
    title: string;
    categories: Array<{
      title: string;
      content: string;
    }>;
  };
  footer: {
    logo: StaticImageData;
    logoAlt: string;
    columns: Array<{
      title: string;
      links: Array<{
        label: string;
        href: string;
      }>;
    }>;
    copyright: string;
  };
  contact: {
    title: string;
    subtitle: string;
    googleFormUrl: string;
    fields: {
      name: {
        label: string;
        placeholder: string;
        entryId: string;
      };
      email: {
        label: string;
        placeholder: string;
        entryId: string;
      };
      phone: {
        label: string;
        placeholder: string;
        entryId: string;
        optional: boolean;
      };
      content: {
        label: string;
        placeholder: string;
        entryId: string;
      };
    };
    submitButton: {
      text: string;
      sendingText: string;
    };
    messages: {
      success: string;
      error: string;
    };
  };
  about: {
    hero: {
      title: string;
      subtitle: string;
      backgroundColor: string; // e.g., "bg-blue-700"
    };
    stats: {
      enabled: boolean;
      items: Array<{
        value: string;
        label: string;
        color?: string; // e.g., "text-blue-600"
      }>;
    };
    sections: Array<{
      id: string;
      type: "mission" | "vision" | "values" | "team" | "custom";
      enabled: boolean;
      layout?: "default" | "blue-card" | "split" | "grid";
      heading: string;
      content?: string;
      items?: Array<{
        title: string;
        description: string;
        icon?: string;
      }>;
    }>;
    contact: {
      enabled: boolean;
      heading: string;
      showEmail: boolean;
      email: string;
      showPhone: boolean;
      phone: string;
      showAddress: boolean;
      address: string;
    };
    social: {
      enabled: boolean;
      heading: string;
      links: {
        twitter?: string;
        linkedin?: string;
        github?: string;
        instagram?: string;
        facebook?: string;
      };
    };
    cta: {
      enabled: boolean;
      heading: string;
      description: string;
      buttonText: string;
      buttonLink: string;
    };
  };
}

import logo from "@/assets/logo.png";
import fullLogo from "@/assets/fulllogo.png";
import productImage from "@/assets/product-image.png";
import logoAcme from "@/assets/logo-acme.png";
import iitb from "@/assets/rep-logo.png"
import logoQuantum from "@/assets/logo-quantum.png";
import logoEcho from "@/assets/logo-echo.png";
import logoCelestial from "@/assets/logo-celestial.png";
import logoPulse from "@/assets/logo-pulse.png";
import logoApex from "@/assets/logo-apex.png";
import serviceImage from "@/assets/pexels-pixabay-158826.jpg";
import mcpimage from "@/assets/mcp.jpg";
import questionimage from "@/assets/question.jpg";
import ac2 from "@/assets/activity2.jpg";
import ac3 from "@/assets/activity3.jpg";

export const siteConfig: SiteConfig = {
  header: {
    logo: logo,
    logoAlt: "Company Logo",
    navLinks: [
      {
        label: "About Us",
        href: "/about",
      },
      {
        label: "Contact Us",
        href: "/contact",
      },
    ],
  },
  hero: {
    slogan: "Neuradyne AI System Accelerating ideas into impact",
    headerContent:
      "At Neuradyne, we transform ideas into prototype and production-ready software to Scalable Business Solutions.",
    headerImage: logo,
    headerImageAlt: "Header Image",
  },
  services: {
    title: "Products/Services",
    items: [
      {
        title: "OMNI VISION",
        image: serviceImage,
        content:
          "Infrastructure and crowd monitoring is fragmented and reactive. OMNI VISION helps operators detect anomalies, congestion, and safety risks early using AI-powered video analytics.",
        techStack:
          "YOLO-based vision models, Python, FastAPI, Kafka, cloud-native microservices, React dashboards.",
        viewWorkLink: "https://neuradyne.in/omni-vision",
      },
      {
        title: "AI Question Generation",
        image: questionimage,
        content:
          "Institutions struggle to generate high-quality, diverse questions at scale. Our AI Question Generation engine turns source material into assessments tailored by difficulty and topic.",
        techStack:
          "Large language models, Python, LangChain, vector databases, Next.js frontends, cloud orchestration.",
        viewWorkLink: "https://neuradyne.in/ai-question-generation",
      },
      {
        title: "MCP",
        image: mcpimage,
        content:
          "Many teams have ideas for AI products but lack end-to-end execution. Our MVP & Product Engineering service takes you from idea to deployable product quickly and safely.",
        techStack:
          "TypeScript, Next.js, Node.js, PostgreSQL, modern MLOps tooling, CI/CD pipelines.",
        viewWorkLink: "https://neuradyne.in/mvp-product-engineering",
      },
    ],
  },
  partners: {
    title: "Partners",
    logos: [
      {
        src: logoAcme,
        alt: "Acme Logo",
      },
      {
        src: logoQuantum,
        alt: "Quantum Logo",
      },
      {
        src: logoEcho,
        alt: "Echo Logo",
      },
      {
        src: logoCelestial,
        alt: "Celestial Logo",
      },
      {
        src: logoPulse,
        alt: "Pulse Logo",
      },
      {
        src: logoApex,
        alt: "Apex Logo",
      },
      {
        src: iitb,
        alt: "IITB Logo",
      },
    ],
  },
  activities: {
    title: "Activities",
    introContent:
      "Discover our latest activities and updates. Stay informed about what we're working on and how we're making a difference.",
    items: [
      {
        title: "Activity Title 1",
        image: mcpimage,
        content:
          "Description of the first activity. Share details about what this activity involves and its impact.",
        readMoreLink: "#activity-1",
      },
      {
        title: "Activity Title 2",
        image: ac2,
        content:
          "Description of the second activity. Explain the purpose and outcomes of this initiative.",
        readMoreLink: "#activity-2",
      },
      {
        title: "Activity Title 3",
        image: ac3,
        content:
          "Description of the third activity. Provide information about this activity and its significance.",
        readMoreLink: "#activity-3",
      },
    ],
  },
  blog: {
    title: "Neuradyne AI Blog",
    categories: [
      {
        title: "Applied Artificial Intelligence",
        content:
          "Neuradyne AI builds practical AI systems that solve real-world problems. From intelligent monitoring to automation, we focus on deploying AI that delivers measurable impact.",
      },
      {
        title: "Startup Prototyping & MVPs",
        content:
          "We help ideas move fast. Neuradyne AI specializes in rapid prototyping and MVP development, enabling startups to validate concepts and scale with confidence.",
      },
      {
        title: "Computer Vision Systems",
        content:
          "Using modern vision models like YOLO, we develop smart detection systems for infrastructure, safety, and monitoring applications.",
      },
      {
        title: "NLP & Knowledge Automation",
        content:
          "Neuradyne AI leverages NLP to automate knowledge workflows, from question generation to intelligent document-based assistants.",
      },
      {
        title: "Scalable Software Engineering",
        content:
          "We design robust, scalable software architectures that support AI systems from prototype to production.",
      },
    ],
  },

  footer: {
    logo: fullLogo,
    logoAlt: "Company Logo",
    columns: [
      {
        title: "Socials",
        links: [
          {
            label: "Twitter",
            href: "#twitter",
          },
          {
            label: "Instagram",
            href: "#instagram",
          },
          {
            label: "LinkedIn",
            href: "#linkedin",
          },
        ],
      },
      {
        title: "Developers",
        links: [
          {
            label: "Documentation",
            href: "#docs",
          },
          {
            label: "API Reference",
            href: "#api",
          },
          {
            label: "GitHub",
            href: "#github",
          },
        ],
      },
      {
        title: "Products",
        links: [
          {
            label: "Features",
            href: "#features",
          },
          {
            label: "Pricing",
            href: "#pricing",
          },
          {
            label: "Updates",
            href: "#updates",
          },
        ],
      },
      {
        title: "Company",
        links: [
          {
            label: "About",
            href: "/about",
          },
          {
            label: "Careers",
            href: "#careers",
          },
          {
            label: "Contact",
            href: "/contact",
          },
        ],
      },
    ],
    copyright: "© 2026 Neuradyne, Inc. All rights reserved.",
  },
  contact: {
    title: "Contact Us",
    subtitle: "We'd love to hear from you. Send us a message!",
    googleFormUrl:
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdMrVMAVGimlFQ2ARpWtUM7NweEOUb7fOSrQx3k5oq_YuMZvw/formResponse",
    fields: {
      name: {
        label: "Full Name",
        placeholder: "Enter your full name",
        entryId: "entry.1898121508",
      },
      email: {
        label: "Email Address",
        placeholder: "Enter your email address",
        entryId: "entry.307888726",
      },
      phone: {
        label: "Phone Number",
        placeholder: "+91 234 567 8900",
        entryId: "entry.583166673",
        optional: true,
      },
      content: {
        label: "Your Message/Content",
        placeholder: "Tell us what's on your mind...",
        entryId: "entry.809906268",
      },
    },
    submitButton: {
      text: "Send Message",
      sendingText: "Sending...",
    },
    messages: {
      success: "✓ Thank you! Your message has been sent successfully.",
      error: "✗ Oops! Something went wrong. Please try again.",
    },
  },
  about: {
    hero: {
      title: "About Us",
      subtitle:
        "Neuradyne helps businesses imagine their future and make it real with AI, technology and people.",
      backgroundColor: "bg-blue-700",
    },
    stats: {
      enabled: true,
      items: [
        {
          value: "₹22.1cr",
          label: "2024 revenue",
          color: "text-blue-600",
        },
        {
          value: "420K",
          label: "people",
          color: "text-blue-600",
        },
        {
          value: "50+",
          label: "countries",
          color: "text-blue-600",
        },
      ],
    },
    sections: [
      {
        id: "mission",
        type: "mission",
        enabled: true,
        layout: "split",
        heading: "Our Mission",
        content:
          "At Neuradyne, we are dedicated to transforming ideas into prototype and production-ready software solutions. Our commitment to excellence and innovation drives everything we do, and we strive to accelerate ideas into impactful, scalable business solutions that empower our clients to succeed in an ever-evolving digital landscape.",
      },
      {
        id: "vision",
        type: "vision",
        enabled: true,
        layout: "blue-card",
        heading: "Our Vision",
        content:
          "We envision a future where cutting-edge AI technology meets practical business needs, creating solutions that not only solve today's challenges but anticipate tomorrow's opportunities. Through our AI System, we aim to be the catalyst that transforms visionary ideas into tangible results.",
      },
      {
        id: "values",
        type: "values",
        enabled: true,
        layout: "grid",
        heading: "Our Core Values",
        items: [
          {
            title: "Innovation",
            description:
              "We embrace creativity and forward-thinking solutions, constantly pushing the boundaries of what's possible with AI and software development.",
          },
          {
            title: "Excellence",
            description:
              "We pursue the highest standards in everything we do, from code quality to customer service, ensuring exceptional results for our clients.",
          },
          {
            title: "Integrity",
            description:
              "We operate with honesty, transparency, and ethical principles, building trust through our actions and commitments.",
          },
          {
            title: "Collaboration",
            description:
              "We believe in the power of teamwork and partnership, working closely with our clients to understand their needs and deliver tailored solutions.",
          },
        ],
      },
      {
        id: "custom-section",
        type: "custom",
        enabled: false,
        layout: "default",
        heading: "Custom Section",
        content:
          "Add any custom content here. You can enable/disable this section as needed.",
      },
    ],
    contact: {
      enabled: true,
      heading: "Get In Touch",
      showEmail: true,
      email: "contact@neuradyne.com",
      showPhone: true,
      phone: "+91 234 567 8900",
      showAddress: true,
      address: "Bhubaneswar, Odisha, India",
    },
    social: {
      enabled: true,
      heading: "Connect With Us",
      links: {
        twitter: "#twitter",
        linkedin: "#linkedin",
        github: "#github",
        instagram: "#instagram",
      },
    },
    cta: {
      enabled: true,
      heading: "Ready to get started?",
      description:
        "Let's discuss how we can help accelerate your ideas into impact.",
      buttonText: "Contact Us",
      buttonLink: "/contact",
    },
  },
};
