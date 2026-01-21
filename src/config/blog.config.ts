import { StaticImageData } from "next/image";
import serviceImage from "@/assets/pexels-pixabay-158826.jpg";
import questionimage from "@/assets/question.jpg";
import mcpimage from "@/assets/mcp.jpg";
import productImage from "@/assets/product-image.png";

export type ContentBlock = 
  | { type: "heading"; level: 1 | 2 | 3 | 4 | 5 | 6; text: string }
  | { type: "paragraph"; text: string }
  | { type: "image"; src: StaticImageData | string; alt: string; caption?: string }
  | { type: "code"; language: string; code: string; filename?: string }
  | { type: "quote"; text: string; author?: string }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "link"; text: string; url: string }
  | { type: "highlight"; text: string; color?: "blue" | "green" | "yellow" | "red" }
  | { type: "divider" }
  | { type: "callout"; variant: "info" | "warning" | "success" | "error"; title?: string; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  content: string; // Keep for backward compatibility
  excerpt: string;
  date?: string;
  author?: string;
  image?: StaticImageData;
  category?: string;
  detail?: ContentBlock[]; // New rich content structure
  readTime?: string;
  tags?: string[];
}

export interface BlogConfig {
  title: string;
  description: string;
  posts: BlogPost[];
}

export const blogConfig: BlogConfig = {
  title: "Neuradyne AI Blog",
  description: "Insights, updates, and stories from Neuradyne AI",
  posts: [
    {
      slug: "dijkstra-algorithm-just-got-beaten",
      title: "Dijkstra's Algorithm Just Got Beaten",
      excerpt: "Researchers Break the 60+ Year Sorting Barrier.",
      image: serviceImage,
      content: `For over 60 years, Dijkstra's algorithm has been the gold standard...`, // Keep original
      date: "2026-01-21",
      author: "Neuradyne Team",
      category: "Algorithm Research",
      readTime: "8 min read",
      tags: ["Algorithms", "Research", "Graph Theory"],
      detail: [
        {
          type: "paragraph",
          text: "For over 60 years, Dijkstra's algorithm has been the gold standard for finding the shortest paths from one source to all other nodes in a graph—used everywhere from GPS navigation to network routing and social network analysis."
        },
        {
          type: "callout",
          variant: "info",
          title: "Key Insight",
          text: "The classic version runs in O(m + n log n) time, where m is edges and n is nodes. Most experts believed this 'sorting barrier' was fundamental."
        },
        {
          type: "heading",
          level: 2,
          text: "The Breakthrough"
        },
        {
          type: "paragraph",
          text: "In this 2025 paper, researchers from Tsinghua University, Stanford, and Max Planck Institute present the first deterministic algorithm that beats this bound on directed graphs:"
        },
        {
          type: "highlight",
          text: "O(m log^{2/3} n) time — asymptotically faster on sparse graphs",
          color: "green"
        },
        {
          type: "paragraph",
          text: "This is huge: it shatters a long-standing belief in theoretical computer science and opens the door to rethinking many graph problems."
        },
        {
          type: "heading",
          level: 2,
          text: "Key Highlights"
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Breaks the sorting barrier: No longer do we need to fully sort all vertices by distance",
            "Deterministic & real weights: Works on directed graphs with any non-negative real weights",
            "Sparse graph win: Biggest speedup when m = O(n), common in road networks",
            "Novel technique: Uses recursive divide-and-conquer + pivot selection",
            "Impact: Challenges textbook dogma and may inspire faster algorithms"
          ]
        },
        {
          type: "image",
          src: serviceImage,
          alt: "Graph algorithm visualization",
          caption: "Visualizing the breakthrough in shortest path algorithms"
        },
        {
          type: "heading",
          level: 2,
          text: "What the Paper Says"
        },
        {
          type: "quote",
          text: "We give a deterministic O(m log^{2/3} n)-time algorithm for single-source shortest paths (SSSP) on directed graphs with real non-negative edge weights in the comparison-addition model. This is the first result to break the O(m + n log n) time bound of Dijkstra's algorithm on sparse graphs.",
          author: "Research Paper Authors"
        },
        {
          type: "heading",
          level: 2,
          text: "Code Comparison"
        },
        {
          type: "code",
          language: "python",
          filename: "dijkstra_classic.py",
          code: `import heapq

def dijkstra(graph, start):
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    pq = [(0, start)]
    
    while pq:
        curr_dist, curr_node = heapq.heappop(pq)
        
        if curr_dist > distances[curr_node]:
            continue
            
        for neighbor, weight in graph[curr_node].items():
            distance = curr_dist + weight
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(pq, (distance, neighbor))
    
    return distances`
        },
        {
          type: "heading",
          level: 2,
          text: "Why This Matters"
        },
        {
          type: "callout",
          variant: "success",
          title: "Real-World Impact",
          text: "Breakthroughs like this often lead to practical improvements years later. Think: faster Google Maps rerouting, more efficient supply-chain optimization, quicker AI reasoning over knowledge graphs."
        },
        {
          type: "paragraph",
          text: "Even if this exact algorithm has high constants and isn't plug-and-play yet, it's exciting proof that some 'optimal' algorithms we learned in school can still be improved."
        },
        {
          type: "divider"
        },
        {
          type: "paragraph",
          text: "Curious? Read the full paper:"
        },
        {
          type: "link",
          text: "Breaking the Sorting Barrier for Directed Single-Source Shortest Paths",
          url: "https://arxiv.org/pdf/2504.17033"
        }
      ]
    },
    {
      slug: "yoloe-real-time-seeing-anything",
      title: "YOLOE: Real-Time Seeing Anything",
      excerpt: "Unified open-vocabulary detection that outperforms YOLO-World with significantly lower training cost.",
      image: serviceImage,
      content: "YOLOE introduces a unified open-set detection framework supporting text prompts, visual prompts, and prompt-free inference in real time.",
      date: "2025-03-09",
      author: "Neuradyne Team",
      category: "Computer Vision",
      readTime: "7 min read",
      tags: ["YOLO", "Object Detection", "Open-Vocabulary"],
      detail: [
        {
          type: "paragraph",
          text: "Conventional YOLO models are optimized for speed but rely on fixed object categories, limiting their usefulness in open-world scenarios. YOLOE addresses this limitation by integrating detection and segmentation under a single architecture that supports text prompts, visual prompts, and prompt-free inference."
        },
        {
          type: "callout",
          variant: "info",
          title: "Key Innovation",
          text: "YOLOE introduces RepRTA for region-text alignment, SAVPE for visual prompt encoding, and LRPC for prompt-free detection, enabling zero-shot generalization without heavy computation."
        },
        {
          type: "heading",
          level: 2,
          text: "Performance Results"
        },
        {
          type: "paragraph",
          text: "According to the authors, YOLOE-v8-S outperforms YOLO-Worldv2-S on the LVIS benchmark while requiring substantially less training cost and maintaining faster inference speed. The model also demonstrates strong transfer performance when evaluated on COCO."
        },
        {
          type: "highlight",
          text: "Demonstrates strong zero-shot transfer while preserving real-time inference",
          color: "green"
        },
        {
          type: "heading",
          level: 2,
          text: "Core Techniques"
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Re-parameterizable Region-Text Alignment (RepRTA)",
            "Semantic-Activated Visual Prompt Encoder (SAVPE)",
            "Lazy Region-Prompt Contrast (LRPC)",
            "Prompt-free open-vocabulary detection",
            "Real-time inference on edge-class devices"
          ]
        },
        {
          type: "heading",
          level: 2,
          text: "Why It Matters"
        },
        {
          type: "callout",
          variant: "success",
          title: "Deployment Ready",
          text: "YOLOE brings open-vocabulary detection to real-time applications without sacrificing the efficiency that YOLO models are known for."
        },
        {
          type: "paragraph",
          text: "This makes YOLOE especially useful for robotics, autonomous systems, and medical imaging where unseen objects frequently appear."
        },
        {
          type: "divider"
        },
        {
          type: "link",
          text: "YOLOE: Real-Time Seeing Anything",
          url: "https://arxiv.org/abs/2503.07465"
        }
      ]
    },
    {
      slug: "yolo-evolution-survey",
      title: "YOLOv1 to YOLOv11: A Comprehensive Survey",
      excerpt: "A decade-long review of YOLO architectures, benchmarks, and future research directions.",
      image: serviceImage,
      content: "This survey traces the evolution of YOLO from early regression-based detection to modern multi-task, real-time vision systems.",
      date: "2025-08-03",
      author: "Neuradyne Team",
      category: "Survey Paper",
      readTime: "9 min read",
      tags: ["YOLO", "Object Detection", "Survey"],
      detail: [
        {
          type: "paragraph",
          text: "Over the past decade, the YOLO family has continuously redefined real-time object detection. This survey reviews YOLO versions from v1 through v11, analyzing architectural changes, benchmark results, and practical deployment trends."
        },
        {
          type: "callout",
          variant: "info",
          title: "Evolution Path",
          text: "Each YOLO version balances speed and accuracy through architectural refinements, expanding from detection to segmentation, pose estimation, and tracking."
        },
        {
          type: "heading",
          level: 2,
          text: "Architectural Milestones"
        },
        {
          type: "paragraph",
          text: "The paper highlights major innovations such as feature pyramid networks, attention mechanisms, decoupled heads, and training optimizations that progressively improved real-time performance across diverse hardware platforms."
        },
        {
          type: "highlight",
          text: "Provides a unified comparison across tasks, datasets, and deployment scenarios",
          color: "green"
        },
        {
          type: "heading",
          level: 2,
          text: "Why This Survey Matters"
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Side-by-side comparison of YOLO variants",
            "Coverage of real-world industrial and medical use cases",
            "Benchmark summaries against competing detectors",
            "Analysis of trade-offs across speed and accuracy",
            "Future research directions for real-time vision"
          ]
        },
        {
          type: "divider"
        },
        {
          type: "link",
          text: "YOLOv1 to YOLOv11: A Comprehensive Survey",
          url: "https://arxiv.org/abs/2508.02067"
        }
      ]
    },
    {
      slug: "vllm-efficient-llm-inference",
      title: "vLLM: Efficient Large Language Model Inference",
      excerpt: "A system-level solution to KV-cache bottlenecks using PagedAttention.",
      image: serviceImage,
      content: "vLLM is an open-source inference engine designed to improve memory efficiency and throughput when serving large language models.",
      date: "2025-12-14",
      author: "Neuradyne Team",
      category: "Systems Research",
      readTime: "8 min read",
      tags: ["vLLM", "LLM Inference", "GenAI"],
      detail: [
        {
          type: "paragraph",
          text: "As large language models grow in size and context length, inference becomes constrained by KV-cache memory usage. vLLM addresses this issue by introducing PagedAttention, a memory management strategy inspired by operating system virtual memory."
        },
        {
          type: "callout",
          variant: "info",
          title: "Core Idea",
          text: "PagedAttention divides KV-cache into fixed-size blocks, reducing fragmentation and enabling flexible batching."
        },
        {
          type: "heading",
          level: 2,
          text: "System Design"
        },
        {
          type: "paragraph",
          text: "The system integrates dynamic request scheduling, efficient memory reuse, and extensibility for different hardware backends, making it suitable for production-scale LLM deployment."
        },
        {
          type: "highlight",
          text: "Bridges research-level LLMs with real-world deployment constraints",
          color: "green"
        },
        {
          type: "heading",
          level: 2,
          text: "Production Impact"
        },
        {
          type: "paragraph",
          text: "vLLM has been widely adopted in LLM serving stacks due to its balance of throughput, latency, and operational simplicity."
        },
        {
          type: "divider"
        },
        {
          type: "link",
          text: "vLLM Inference Engine (Berkeley Technical Report)",
          url: "https://www2.eecs.berkeley.edu/Pubs/TechRpts/2025/EECS-2025-192.html"
        }
      ]
    },
    {
      slug: "sok-machine-unlearning-llms",
      title: "SoK: Machine Unlearning for Large Language Models",
      excerpt: "A systematization of methods to remove training data influence from LLMs.",
      image: serviceImage,
      content: "This SoK paper reviews techniques for machine unlearning in large language models, focusing on privacy, safety, and regulatory compliance.",
      date: "2025-06-10",
      author: "Neuradyne Team",
      category: "GenAI Ethics",
      readTime: "7 min read",
      tags: ["LLM", "Unlearning", "Privacy"],
      detail: [
        {
          type: "paragraph",
          text: "Large language models may unintentionally memorize sensitive training data. Machine unlearning aims to remove the influence of specific data points without retraining models from scratch."
        },
        {
          type: "callout",
          variant: "info",
          title: "Key Contribution",
          text: "The paper introduces an intent-based taxonomy distinguishing true data removal from behavioral suppression."
        },
        {
          type: "heading",
          level: 2,
          text: "Method Review"
        },
        {
          type: "paragraph",
          text: "The survey analyzes approaches such as gradient ascent, model editing, and representation steering, evaluating them across benchmarks derived from public datasets."
        },
        {
          type: "highlight",
          text: "Demonstrates large efficiency gains over full retraining",
          color: "green"
        },
        {
          type: "heading",
          level: 2,
          text: "Why This Matters"
        },
        {
          type: "paragraph",
          text: "Machine unlearning is increasingly important for compliance with privacy regulations such as GDPR and for building trustworthy AI systems."
        },
        {
          type: "divider"
        },
        {
          type: "link",
          text: "SoK: Machine Unlearning for Large Language Models",
          url: "https://arxiv.org/abs/2506.09227"
        }
      ]
    },
  ]
};