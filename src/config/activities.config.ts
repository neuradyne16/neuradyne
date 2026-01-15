import { StaticImageData } from "next/image";
import mcpimage from "@/assets/mcp.jpg";
import omnivision from "@/assets/omnivision.jpg";
import ac2 from "@/assets/activity2.jpg";
import ac3 from "@/assets/activity3.jpg";

export interface Activity {
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  image?: StaticImageData;
  readMoreLink?: string;
  date?: string;
  location?: string;
}

export interface ActivitiesConfig {
  title: string;
  introContent: string;
  items: Activity[];
}

export const activitiesConfig: ActivitiesConfig = {
  title: "Activities",
  introContent:
    "Discover our latest activities and updates. Stay informed about what we're working on and how we're making a difference.",
  items: [
    {
      slug: "activity-title-1",
      title: "Activity Title 1",
      excerpt:
        "Description of the first activity. Share details about what this activity involves and its impact.",
      content: `Description of the first activity. Share details about what this activity involves and its impact.

This activity represents a significant milestone in our journey. We've been working tirelessly to bring innovative solutions to our clients, and this particular initiative showcases our commitment to excellence.

Key highlights of this activity include:
- Innovative approach to problem-solving
- Collaboration with industry partners
- Measurable impact on client outcomes
- Continuous improvement and iteration

Through this activity, we've been able to demonstrate the power of combining cutting-edge technology with practical business solutions. Our team has worked closely with stakeholders to ensure that every aspect of the project meets the highest standards.

The results speak for themselves. We've seen significant improvements in efficiency, cost reduction, and overall satisfaction. This activity has not only benefited our clients but has also provided valuable insights that inform our future work.

We're excited to continue building on this foundation and exploring new opportunities to create value for our clients and partners.`,
      image: omnivision,
      date: "2024-01-20",
      location: "Bhubaneswar, India",
    },
    {
      slug: "activity-title-2",
      title: "Activity Title 2",
      excerpt:
        "Description of the second activity. Explain the purpose and outcomes of this initiative.",
      content: `Description of the second activity. Explain the purpose and outcomes of this initiative.

This activity was designed to address a critical need in the market. We identified an opportunity to leverage our expertise and create something truly impactful for our community and clients.

The initiative focused on several key objectives:
- Building stronger community connections
- Sharing knowledge and best practices
- Fostering innovation and collaboration
- Creating lasting value for participants

Throughout the duration of this activity, we engaged with various stakeholders, including clients, partners, and community members. The feedback we received has been overwhelmingly positive, and we're proud of the outcomes we've achieved.

One of the most rewarding aspects of this activity has been seeing the tangible impact on our participants. Many have reported significant improvements in their understanding and capabilities, which directly translates to better outcomes in their own work.

We're committed to continuing initiatives like this that not only advance our own goals but also contribute to the broader community. We believe that by sharing knowledge and collaborating, we can all achieve more together.`,
      image: ac2,
      date: "2024-02-15",
      location: "Online",
    },
    {
      slug: "activity-title-3",
      title: "Activity Title 3",
      excerpt:
        "Description of the third activity. Provide information about this activity and its significance.",
      content: `Description of the third activity. Provide information about this activity and its significance.

This activity represents our ongoing commitment to innovation and excellence. We've always believed that staying ahead requires continuous learning, experimentation, and adaptation.

The significance of this activity extends beyond its immediate outcomes. It represents:
- A step forward in our capabilities
- A demonstration of our values
- An investment in future opportunities
- A commitment to continuous improvement

Throughout this activity, we've maintained our focus on quality, innovation, and client satisfaction. Every decision has been made with these principles in mind, ensuring that we deliver the best possible outcomes.

The activity has also provided valuable learning opportunities for our team. We've gained new insights, developed new skills, and strengthened our capabilities in ways that will benefit all our future work.

We're grateful for the support and collaboration we've received throughout this process. It's through partnerships and shared commitment that we're able to achieve these meaningful results.

As we look to the future, we're excited about the possibilities that this activity has opened up. We're committed to building on this foundation and continuing to push the boundaries of what's possible.`,
      image: ac3,
      date: "2024-03-25",
      location: "Bhubaneswar, India",
    },
  ],
};

