import { StaticImageData } from "next/image";

export interface AIQuestionGenConfig {
  hero: {
    title: string;
    subtitle: string;
    buttons: Array<{
      text: string;
      href: string;
      variant: "primary" | "secondary";
      icon?: string;
    }>;
    securityFeatures: Array<string>;
    sourceNote: string;
  };

  problem: {
    title: string;
    subtitle: string;
    stats: Array<{
      value: string;
      label: string;
    }>;
    sourceNote: string;
  };

  solution: {
    title: string;
    subtitle: string;
  };

  process: {
    title: string;
    steps: Array<{
      number: number;
      icon: string;
      title: string;
      description: string;
    }>;
  };

  examBoards: {
    title: string;
    logos: Array<{
      name: string;
      icon: string;
    }>;
  };

  cta: {
    title: string;
    buttons: Array<{
      text: string;
      href: string;
      variant: "primary" | "secondary" | "tertiary";
    }>;
  };
}

export const aiQuestionGenConfig: AIQuestionGenConfig = {
  hero: {
    title: "AI QUESTION GENERATOR",
    subtitle: "Generate Secure Exam Questions Just Minutes Before the Exam",
    buttons: [
      {
        text: "Book a Demo",
        href: "/contact?demo=ai-question-generator",
        variant: "primary",
        icon: "play",
      },
      {
        text: "Watch 60s Video",
        href: "#video",
        variant: "secondary",
      },
    ],
    securityFeatures: [
      "Encryption",
      "Audit Logs",
      "Secure Delivery",
      "Role-Based Access",
    ],
    sourceNote: "* Source: Newslaundry & India Today Reports",
  },

  problem: {
    title: "The Problem",
    subtitle: "Why Exam Paper Leaks Happen?",
    stats: [
      {
        value: "89",
        label: "Leaks (Last Decade)",
      },
      {
        value: "48",
        label: "Retests Conducted",
      },
      {
        value: "6.5 Crore",
        label: "Candidates Affected",
      },
    ],
    sourceNote: "* Source: Newslaundry & India Today Reports",
  },

  solution: {
    title: "The Proposed Solution",
    subtitle:
      "AI-Generated Questions Just Minutes Before Exams to Minimize Leaks",
  },

  process: {
    title: "The Proposed Solution",
    steps: [
      {
        number: 1,
        icon: "document",
        title: "Syllabus Blueprint",
        description: "Define exam structure and topics",
      },
      {
        number: 2,
        icon: "cube",
        title: "Secure AI Seed",
        description: "Generate unique question bank",
      },
      {
        number: 3,
        icon: "file",
        title: "T-10 Min Question Gen",
        description: "Create questions just before exam",
      },
      {
        number: 4,
        icon: "mail",
        title: "Encrypted Delivery",
        description: "Secure distribution to centers",
      },
      {
        number: 5,
        icon: "lock",
        title: "T-0 Center Unlock",
        description: "Questions unlock at exam start time",
      },
    ],
  },

  examBoards: {
    title: "Our Clients",
    logos: [
      { name: "PSC", icon: "psc" },
      { name: "NEET", icon: "neet" },
      { name: "University", icon: "university" },
      { name: "Board", icon: "board" },
      { name: "SSC", icon: "ssc" },
    ],
  },

  cta: {
    title: "Ready to Secure Your Exams?",
    buttons: [
      {
        text: "Book a Demo",
        href: "/contact?demo=ai-question-generator",
        variant: "primary",
      },
      {
        text: "Request Proposal",
        href: "/contact?request=proposal",
        variant: "secondary",
      },
      {
        text: "Talk to Security Team",
        href: "/contact?team=security",
        variant: "tertiary",
      },
    ],
  },
};
