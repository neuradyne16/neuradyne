import { StaticImageData } from "next/image";
import OmniVisionImage from "@/assets/omnivision.jpg";

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
    sourceNote?: string;
  };

  problemNumbers: {
    title: string;
    cards: Array<{
      value: string;
      label: string;
      sublabel?: string;
      icon?: string;
      href?: string;
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
    subtitle: "Smart incident response system",
    image: OmniVisionImage,
    backgroundColor: "bg-gray-100",
  },

  problem: {
    title: "Battling system with incident menace",
    subtitle: "Rapid Alerts to Authorities to Save Lives.",
    stats: [
      {
        value: "4,61,312",
        label: "Road Accidents Reported",
      },
      {
        value: "3,76,148",
        label: "People Died",
      },
      {
        value: "4,36,217",
        label: "Injured",
      },
    ],
    sourceNote: "*Source: MoRTH – 2022 Official Road Crash Data",
  },

  problemNumbers: {
    title: "Threats to Road Safety in India",
    cards: [
      {
        value: "7,77,423",
        label: "Deaths Due to Car Accidents",
        sublabel: "2018-2022",
        href: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2036268&reg=3&lang=2",
        icon: "accident",
      },
      {
        value: "6200+",
        label: "Deaths Due to Potholes",
        sublabel: "2021-2025",
        href: "https://timesofindia.indiatimes.com/india/potholes-claimed-2161-lives-in-2023-wrong-side-driving-9432/articleshow/123569966.cms",
        icon: "pothole",
      },
      {
        value: "50-70",
        label: "Deaths Due to Fallen Trees",
        sublabel: "2021-2025",
        href: "https://timesofindia.indiatimes.com/city/nashik/over-400-trees-uprooted-in-nashik-city-civic-bocy-starts-trimming-of-branches-of-risky-trees/articleshow/121146368.cms",
        icon: "tree",
      },
      {
        value: "8,07,800",
        label: "Deaths Due to Open Pits & Road Hazards",
        sublabel: "2021–2025",
        href: "https://vajiramandravi.com/current-affairs/indias-road-accidents-2024-fatalities-rise-despite-state-level-gains",
        icon: "hazard",
      },
    ],
    sourceNote: "*Government Reports & Audit Data",
  },

  solution: {
    title: "The Solution: Snap & Alert",
    subtitle: "Smart incident reporting system",
    steps: [
      {
        icon: "camera",
        title: "Snap & Geo-Tag",
        description: "Click a photo of accident, pothole, fallen tree, etc.",
      },
      {
        icon: "alert",
        title: "Geo-Tagged Alert Sent",
        description: "Instantly notified to the right authorities.",
      },
      {
        icon: "response",
        title: "Auto Notify Authorities",
        description: "Ambulance, Police, Fire Brigade & Municipality.",
      },
    ],
  },

  demoPhone: {
    enabled: true,
    buttonText: "Snap & Report Hazard",
    description: "Instant geo-tag alerts sent to authorities.",
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
