import { StaticImageData } from "next/image";
import OmniVisionImage from "@/assets/pexels-pixabay-158826.jpg"; // Add your image path

export interface OmniVisionConfig {
  hero: {
    title: string;
    subtitle: string;
    image: StaticImageData;
    backgroundColor?: string;
  };
  
  problem: {
    title: string;
    subtitle: string;
    stats: Array<{
      value: string;
      label: string;
      icon?: string;
    }>;
    liveToll: {
      enabled: boolean;
      title: string;
      deaths: number;
      injuries: number;
      timeframe: string;
    };
    sourceNote?: string;
  };
  
  problemNumbers: {
    title: string;
    cards: Array<{
      value: string;
      label: string;
      sublabel?: string;
      icon?: string;
    }>;
    sourceNote?: string;
  };
  
  solution: {
    title: string;
    subtitle: string;
    steps: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  
  demoPhone: {
    enabled: boolean;
    buttonText: string;
    description: string;
  };
  
  cta: {
    getInTouch: {
      enabled: boolean;
      title: string;
      subtitle: string;
      contactText: string;
      buttonText: string;
      buttonLink: string;
    };
    requestDemo: {
      enabled: boolean;
      title: string;
      subtitle: string;
      demoText: string;
      buttonText: string;
      buttonLink: string;
    };
  };
}

export const omniVisionConfig: OmniVisionConfig = {
  hero: {
    title: "Omni Vision",
    subtitle: "AI-powered pothole incident response system",
    image: OmniVisionImage,
    backgroundColor: "bg-gray-100",
  },
  
  problem: {
    title: "Battling the Pothole Menace",
    subtitle: "Delivering Rapid Alerts to Authorities to Save Lives.",
    stats: [
      {
        value: "15,000+",
        label: "Accidents / Year",
      },
      {
        value: "1,500+",
        label: "Deaths / Year",
      },
      {
        value: "5 to 6 Days",
        label: "Average Response Time",
      },
    ],
    liveToll: {
      enabled: true,
      title: "LIVE TOLL",
      deaths: 52,
      injuries: 276,
      timeframe: "Last 5 Days",
    },
    sourceNote: "*Government of India's MoRTH Report (2022)",
  },
  
  problemNumbers: {
    title: "The Problem in Numbers",
    cards: [
      {
        value: "15,100+",
        label: "Pothole Accidents / Year",
        sublabel: "India (MoRTH)",
        icon: "pothole",
      },
      {
        value: "1,565",
        label: "Deaths Annually Due to Potholes*",
        sublabel: "India (MoRTH)",
        icon: "death",
      },
      {
        value: "900+",
        label: "Deaths While Waiting for Repair",
        sublabel: "",
        icon: "waiting",
      },
      {
        value: "900+",
        label: "Deaths While Waiting for Repair",
        sublabel: "",
        icon: "repair",
      },
    ],
    sourceNote: "*Government of India's MoRTH Report (2022)",
  },
  
  solution: {
    title: "The Solution: Snap & Alert",
    subtitle: "Simply Take A Photo & We'll Handle the Rest.",
    steps: [
      {
        icon: "camera",
        title: "Snap & Geo-Tag",
        description: "Click a photo of the pothole.",
      },
      {
        icon: "alert",
        title: "Instant Alert Sent",
        description: "Notified to Police, Ambulance, Municipal Corporation.",
      },
      {
        icon: "response",
        title: "Faster Response",
        description: "Quicker Dispatch, Save More Lives.",
      },
    ],
  },
  
  demoPhone: {
    enabled: true,
    buttonText: "Snap & Report Pothole",
    description: "Click & Send! Geo-tagged alerts to authorities.",
  },
  
  cta: {
    getInTouch: {
      enabled: true,
      title: "Get In Touch",
      subtitle: "Want to know more?",
      contactText: "Contact us for partnerships & integrations.",
      buttonText: "CONTACT US",
      buttonLink: "/contact",
    },
    requestDemo: {
      enabled: true,
      title: "Request A Demo",
      subtitle: "Experience Omni Vision in Action.",
      demoText: "Book a live demo for your city.",
      buttonText: "BOOK NOW",
      buttonLink: "/demo/omni-vision",
    },
  },
};