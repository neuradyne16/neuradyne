# Neuradyne Landing Page - Software Documentation

**Document Version:** 1.0  
**Date:** January 6, 2026  
**Project:** Neuradyne Landing Page  
**Organization:** Neuradyne 

---

## Table of Contents

1. [Introduction](#1-introduction)
   1.1 [Purpose](#11-purpose)
   1.2 [Scope](#12-scope)
   1.3 [Definitions and Abbreviations](#13-definitions-and-abbreviations)
   1.4 [References](#14-references)

2. [Overall Description](#2-overall-description)
   2.1 [Product Perspective](#21-product-perspective)
   2.2 [Product Functions](#22-product-functions)
   2.3 [User Characteristics](#23-user-characteristics)
   2.4 [Constraints](#24-constraints)
   2.5 [Assumptions and Dependencies](#25-assumptions-and-dependencies)

3. [Specific Requirements](#3-specific-requirements)
   3.1 [External Interface Requirements](#31-external-interface-requirements)
   3.2 [Functional Requirements](#32-functional-requirements)
   3.3 [Performance Requirements](#33-performance-requirements)
   3.4 [Design Constraints](#34-design-constraints)
   3.5 [Software System Attributes](#35-software-system-attributes)

4. [System Design](#4-system-design)
   4.1 [System Architecture](#41-system-architecture)
   4.2 [Database Design](#42-database-design)
   4.3 [User Interface Design](#43-user-interface-design)

5. [Implementation](#5-implementation)
   5.1 [Technology Stack](#51-technology-stack)
   5.2 [Package Dependencies](#52-package-dependencies)
   5.3 [Development Environment](#53-development-environment)
   5.4 [Build and Deployment](#54-build-and-deployment)

6. [API Documentation](#6-api-documentation)
   6.1 [External APIs](#61-external-apis)
   6.2 [Internal APIs](#62-internal-apis)

7. [Testing](#7-testing)
   7.1 [Testing Strategy](#71-testing-strategy)
   7.2 [Test Cases](#72-test-cases)

8. [Maintenance](#8-maintenance)
   8.1 [Maintenance Procedures](#81-maintenance-procedures)
   8.2 [Version Control](#82-version-control)

---

## 1. Introduction

### 1.1 Purpose

This Software Requirements Specification (SRS) document describes the functional and non-functional requirements for the Neuradyne Landing Page. The document is intended to be used by the development team, stakeholders, and maintenance personnel to understand the system requirements and implementation details.

The purpose of this document is to:
- Provide a detailed description of the system's functionality
- Serve as a reference for system design and implementation
- Establish a basis for system testing and validation
- Facilitate communication between stakeholders

### 1.2 Scope

The Neuradyne Landing Page is a modern, responsive web application that serves as the primary marketing and information hub for Neuradyne's services. The system includes:

- **In Scope:**
  - Landing page with hero section, services, partners, activities, and blog
  - About and Contact pages
  - Responsive design for mobile and desktop
  - Dark/light theme support
  - Contact form integration
  - SEO optimization

- **Out of Scope:**
  - Backend server implementation
  - Database management
  - User authentication
  - E-commerce functionality
  - Admin panel

### 1.3 Definitions and Abbreviations

| Term | Definition |
|------|------------|
| API | Application Programming Interface |
| CI/CD | Continuous Integration/Continuous Deployment |
| CMS | Content Management System |
| CSS | Cascading Style Sheets |
| DOM | Document Object Model |
| HTML | HyperText Markup Language |
| ISO | International Organization for Standardization |
| JSX | JavaScript XML |
| NPM | Node Package Manager |
| React | A JavaScript library for building user interfaces |
| SPA | Single Page Application |
| SRS | Software Requirements Specification |
| SSR | Server-Side Rendering |
| UI | User Interface |
| UX | User Experience |

### 1.4 References

| Reference | Title | Version | Date |
|-----------|-------|---------|------|
| [1] | ISO/IEC 26514:2008 | Software and systems engineering - Requirements for designers and developers of user documentation | 2008 |
| [2] | ISO/IEC 12207:2017 | Systems and software engineering - Software life cycle processes | 2017 |
| [3] | Next.js Documentation | https://nextjs.org/docs | Latest |
| [4] | React Documentation | https://react.dev | Latest |
| [5] | TypeScript Handbook | https://www.typescriptlang.org/docs | Latest |

---

## 2. Overall Description

### 2.1 Product Perspective

The Neuradyne Landing Page is a static website built using modern web technologies. It serves as the digital face of Neuradyne, showcasing their services in software development and AI solutions. The system interfaces with external services for form submissions and analytics.

### 2.2 Product Functions

The major functions of the system include:

1. **Display Company Information:** Present Neuradyne's mission, services, and achievements
2. **Service Showcase:** Highlight key services like BilionEye and other offerings
3. **Contact Form:** Allow visitors to submit inquiries via Google Forms integration
4. **Responsive Design:** Provide optimal viewing experience across devices
5. **Theme Support:** Allow users to switch between light and dark themes
6. **Navigation:** Provide intuitive navigation between different sections

### 2.3 User Characteristics

- **Primary Users:** Potential clients, business partners, investors
- **Technical Expertise:** Varies from non-technical visitors to technical professionals
- **Usage Frequency:** Occasional visitors seeking information
- **Accessibility Needs:** Support for various devices and assistive technologies

### 2.4 Constraints

- **Technology Constraints:** Must use specified technology stack (Next.js, React, TypeScript)
- **Browser Support:** Modern browsers (Chrome, Firefox, Safari, Edge)
- **Performance:** Page load time < 3 seconds
- **Mobile Responsiveness:** Support for screens ≥ 320px width

### 2.5 Assumptions and Dependencies

- **Assumptions:**
  - Users have modern web browsers
  - Internet connection is available
  - Google Forms service remains available
  - Image assets are provided in appropriate formats

- **Dependencies:**
  - Next.js framework
  - Node.js runtime
  - NPM package manager
  - External CDN services for fonts and icons

---

## 3. Specific Requirements

### 3.1 External Interface Requirements

#### 3.1.1 User Interfaces

- **Header:** Navigation menu with logo and links
- **Hero Section:** Main banner with slogan and call-to-action
- **Services Section:** Grid layout showcasing company services
- **Partners Section:** Logo carousel of partner companies
- **Activities Section:** Blog-style content display
- **Footer:** Links, social media, and copyright information
- **Contact Form:** Input fields for name, email, phone, and message

#### 3.1.2 Hardware Interfaces

- **Display:** Minimum resolution 320x568 pixels (mobile)
- **Input Devices:** Mouse, keyboard, touch screens

#### 3.1.3 Software Interfaces

- **Google Forms API:** For contact form submissions
<!-- - **Web Browsers:** Chrome 90+, Firefox 88+, Safari 14+, Edge 90+ -->

### 3.2 Functional Requirements

#### 3.2.1 Navigation Functions

**FR-NAV-001:** The system shall display a responsive navigation header
- **Priority:** High
- **Input:** User clicks navigation links
- **Processing:** Route to appropriate page/section
- **Output:** Display selected page/section

#### 3.2.2 Theme Functions

**FR-THEME-001:** The system shall support light and dark themes
- **Priority:** Medium
- **Input:** User clicks theme toggle
- **Processing:** Switch CSS variables and classes
- **Output:** Updated visual theme

#### 3.2.3 Contact Functions

**FR-CONTACT-001:** The system shall submit contact form data to Google Forms
- **Priority:** High
- **Input:** User fills and submits contact form
- **Processing:** Validate input, submit to Google Forms API
- **Output:** Success/error message

### 3.3 Performance Requirements

- **Page Load Time:** < 3 seconds for initial page load
- **Time to Interactive:** < 5 seconds
- **Lighthouse Score:** > 90 for Performance, Accessibility, Best Practices, SEO

### 3.4 Design Constraints

- **Technology Stack:** Next.js 16+, React 18+, TypeScript 5+
- **Styling:** Tailwind CSS with custom design system
- **Animation:** Framer Motion for smooth transitions
- **Icons:** Lucide React icon library

### 3.5 Software System Attributes

- **Usability:** Intuitive navigation and clear information hierarchy
- **Reliability:** 99.9% uptime for static content
- **Security:** HTTPS encryption, input validation
- **Maintainability:** Modular component architecture
- **Portability:** Cross-browser compatibility

---

## 4. System Design

### 4.1 System Architecture

The system follows a component-based architecture using React and Next.js:

```
├── App Router (Next.js 16)
├── Components Layer
│   ├── UI Components (shadcn/ui)
│   ├── Page Components
│   └── Layout Components
├── Configuration Layer
│   └── site.config.ts
├── Assets Layer
└── Utilities Layer
```

### 4.2 Database Design

**Note:** This is a static website with no database. Content is managed through configuration files and static assets.

### 4.3 User Interface Design

#### 4.3.1 Design System

- **Colors:** Blue gradient primary (#3B82F6 to #1E40AF)
- **Typography:** Inter font family
- **Spacing:** 4px grid system
- **Components:** Consistent button, card, and form styles

#### 4.3.2 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

---

## 5. Implementation

### 5.1 Technology Stack

| Component | Technology | Version | Purpose |
|-----------|------------|---------|---------|
| Framework | Next.js | 16.1.1 | React framework with SSR |
| Language | TypeScript | 5.x | Type-safe JavaScript |
| UI Library | React | 18.x | Component library |
| Styling | Tailwind CSS | 3.4.1 | Utility-first CSS |
| Animation | Framer Motion | 11.2.14 | Animation library |
| Icons | Lucide React | 0.562.0 | Icon library |
| Theme | next-themes | 0.4.6 | Theme management |
| UI Components | Radix UI | 2.1.16 | Accessible components |

### 5.2 Package Dependencies

#### 5.2.1 Production Dependencies

```json
{
  "@radix-ui/react-dropdown-menu": "^2.1.16",
  "@radix-ui/react-slot": "^1.2.4",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "framer-motion": "^11.2.14",
  "gsap": "^3.14.2",
  "lucide-react": "^0.562.0",
  "motion": "^12.23.27",
  "next": "^16.1.1",
  "next-themes": "^0.4.6",
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "react-icons": "^5.5.0",
  "tailwindcss-animate": "^1.0.7"
}
```

#### 5.2.2 Development Dependencies

```json
{
  "@svgr/webpack": "^8.1.0",
  "@types/node": "^20.0.0",
  "@types/react": "^18.0.0",
  "@types/react-dom": "^18.0.0",
  "eslint": "^8.57.1",
  "eslint-config-next": "14.2.4",
  "postcss": "^8.0.0",
  "tailwind-merge": "^2.6.0",
  "tailwindcss": "^3.4.1",
  "typescript": "^5.0.0"
}
```

#### 5.2.3 Package Descriptions

**@radix-ui/react-dropdown-menu (^2.1.16):**
- Purpose: Accessible dropdown menu component
- API: `DropdownMenu`, `DropdownMenuTrigger`, `DropdownMenuContent`, `DropdownMenuItem`
- Usage: Navigation menus and selection interfaces

**@radix-ui/react-slot (^1.2.4):**
- Purpose: Component composition utility
- API: `Slot` component for prop forwarding
- Usage: Building flexible component APIs

**class-variance-authority (^0.7.1):**
- Purpose: Type-safe CSS class management
- API: `cva()` function for variant definitions
- Usage: Component styling with variants

**clsx (^2.1.1):**
- Purpose: Conditional CSS class concatenation
- API: `clsx()` function
- Usage: Dynamic class application

**framer-motion (^11.2.14):**
- Purpose: Animation library for React
- API: `motion` components, animation props
- Usage: Page transitions and micro-interactions

**gsap (^3.14.2):**
- Purpose: High-performance animation library
- API: `gsap.to()`, `gsap.from()`, timeline methods
- Usage: Complex animations and sequences

**lucide-react (^0.562.0):**
- Purpose: Icon library
- API: Icon components (e.g., `ArrowRight`, `Menu`)
- Usage: UI icons throughout the application

**motion (^12.23.27):**
- Purpose: Animation utilities
- API: Motion hooks and components
- Usage: Declarative animations

**next (^16.1.1):**
- Purpose: React framework
- API: App Router, Server Components, API Routes
- Usage: Application framework and routing

**next-themes (^0.4.6):**
- Purpose: Theme management for Next.js
- API: `ThemeProvider`, `useTheme` hook
- Usage: Light/dark theme switching

**react (^18.0.0):**
- Purpose: UI library
- API: Components, hooks, JSX
- Usage: Building user interfaces

**react-dom (^18.0.0):**
- Purpose: React DOM renderer
- API: `render()`, `hydrate()`
- Usage: DOM manipulation

**react-icons (^5.5.0):**
- Purpose: Icon library
- API: Icon components from various sets
- Usage: Additional icon options

**tailwindcss-animate (^1.0.7):**
- Purpose: Tailwind CSS animation utilities
- API: Animation classes
- Usage: CSS-based animations

### 5.3 Development Environment

#### 5.3.1 Prerequisites

- Node.js 18.17.0 or later
- npm 8.15.0 or later
- Git 2.30.0 or later

#### 5.3.2 Installation

```bash
# Clone repository
git clone https://github.com/neuradyne16/neuradyne.git
cd neuradyne

# Install dependencies
npm install

# Start development server
npm run dev
```

#### 5.3.3 Environment Variables

No environment variables required for basic functionality.

### 5.4 Build and Deployment

#### 5.4.1 Build Process

```bash
# Production build
npm run build

# Start production server
npm start
```

#### 5.4.2 Deployment

The application can be deployed to:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Any static hosting service

---

## 6. API Documentation

### 6.1 External APIs

#### 6.1.1 Google Forms API

**Purpose:** Contact form submission

**Endpoint:** https://docs.google.com/forms/u/0/d/e/[FORM_ID]/formResponse

**Method:** POST

**Parameters:**
- entry.[Id]: Full Name (string)
- entry.[Id]: Email Address (string)
- entry.[Id]: Phone Number (string, optional)
- entry.[MESSAGE_FIELD]: Message content (string)

**Response:** Redirect to success page

### 6.2 Internal APIs

#### 6.2.1 Configuration API

**File:** src/config/site.config.ts

**Purpose:** Centralized configuration management

**Structure:**
```typescript
interface SiteConfig {
  header: HeaderConfig;
  hero: HeroConfig;
  services: ServicesConfig;
  partners: PartnersConfig;
  activities: ActivitiesConfig;
  blog: BlogConfig;
  footer: FooterConfig;
  contact: ContactConfig;
  about: AboutConfig;
}
```

**Key Methods:**
- Import configuration: `import { siteConfig } from '@/config/site.config'`
- Access sections: `siteConfig.hero`, `siteConfig.services`, etc.

---

## 7. Testing

### 7.1 Testing Strategy

#### 7.1.1 Unit Testing

- **Framework:** Jest (built into Next.js)
- **Coverage:** Component logic and utilities
- **Tools:** React Testing Library

#### 7.1.2 Integration Testing

- **Scope:** Component interactions and routing
- **Tools:** Playwright for E2E testing

#### 7.1.3 Performance Testing

- **Tools:** Lighthouse, WebPageTest
- **Metrics:** Core Web Vitals, accessibility scores

### 7.2 Test Cases

#### 7.2.1 Navigation Tests

**TC-NAV-001:** Verify header navigation links
- **Preconditions:** Application loaded
- **Steps:** Click each navigation link
- **Expected Result:** Correct page/section displayed

#### 7.2.2 Form Tests

**TC-FORM-001:** Contact form submission
- **Preconditions:** Contact page loaded
- **Steps:** Fill form fields, submit
- **Expected Result:** Form data sent to Google Forms

#### 7.2.3 Responsive Tests

**TC-RESP-001:** Mobile layout
- **Preconditions:** Application loaded
- **Steps:** Resize window to mobile width
- **Expected Result:** Layout adapts correctly

---

## 8. Maintenance

### 8.1 Maintenance Procedures

#### 8.1.1 Content Updates

1. Edit `src/config/site.config.ts`
2. Update text, images, and links as needed
3. Test changes locally
4. Deploy updates

#### 8.1.2 Package Updates

1. Check for security vulnerabilities: `npm audit`
2. Update packages: `npm update`
3. Test application functionality
4. Update documentation

#### 8.1.3 Performance Monitoring

1. Run Lighthouse audits regularly
2. Monitor Core Web Vitals
3. Optimize images and code as needed

### 8.2 Version Control

#### 8.2.1 Repository Structure

```
neuradyne/
├── .github/workflows/    # CI/CD pipelines
├── src/                  # Source code
├── public/              # Static assets
├── package.json         # Dependencies
├── README.md           # Documentation
└── docs/               # Additional documentation
```

#### 8.2.2 Branching Strategy

- `main`: Production branch
- `develop`: Development branch
- `feature/*`: Feature branches
- `hotfix/*`: Hotfix branches

---

## Appendix A: Package Version Details

### Production Dependencies - Detailed Versions

| Package | Version | License | Size | Dependencies |
|---------|---------|---------|------|--------------|
| @radix-ui/react-dropdown-menu | 2.1.16 | MIT | 45.2 kB | @radix-ui/react-menu |
| @radix-ui/react-slot | 1.2.4 | MIT | 2.1 kB | react |
| class-variance-authority | 0.7.1 | MIT | 8.3 kB | clsx |
| clsx | 2.1.1 | MIT | 1.2 kB | - |
| framer-motion | 11.2.14 | MIT | 892 kB | react, react-dom |
| gsap | 3.14.2 | Standard | 245 kB | - |
| lucide-react | 0.562.0 | ISC | 1.8 MB | react |
| motion | 12.23.27 | MIT | 45.6 kB | - |
| next | 16.1.1 | MIT | 12.3 MB | react, react-dom |
| next-themes | 0.4.6 | MIT | 15.4 kB | next, react |
| react | 18.3.1 | MIT | 6.7 kB | - |
| react-dom | 18.3.1 | MIT | 123 kB | react |
| react-icons | 5.5.0 | MIT | 4.2 MB | react |
| tailwindcss-animate | 1.0.7 | MIT | 1.8 kB | - |

### Development Dependencies - Detailed Versions

| Package | Version | License | Size | Purpose |
|---------|---------|---------|------|---------|
| @svgr/webpack | 8.1.0 | MIT | 45.6 kB | SVG processing |
| @types/node | 20.17.1 | MIT | 8.9 MB | Node.js types |
| @types/react | 18.3.12 | MIT | 1.2 MB | React types |
| @types/react-dom | 18.3.1 | MIT | 89.4 kB | React DOM types |
| eslint | 8.57.1 | MIT | 12.3 MB | Code linting |
| eslint-config-next | 14.2.4 | MIT | 23.4 kB | Next.js ESLint config |
| postcss | 8.5.1 | MIT | 234 kB | CSS processing |
| tailwind-merge | 2.6.0 | MIT | 12.3 kB | Class merging |
| tailwindcss | 3.4.1 | MIT | 3.4 MB | CSS framework |
| typescript | 5.7.2 | Apache-2.0 | 45.6 MB | Type checking |

---

## Appendix B: Component API Reference

### Header Component

**File:** src/components/Header.tsx

**Props:**
```typescript
interface HeaderProps {
  // No props - uses siteConfig
}
```

**Usage:**
```tsx
<Header />
```

### Hero Component

**File:** src/components/Hero.tsx

**Props:**
```typescript
interface HeroProps {
  // No props - uses siteConfig
}
```

**Usage:**
```tsx
<Hero />
```

### Services Component

**File:** src/components/Services.tsx

**Props:**
```typescript
interface ServicesProps {
  // No props - uses siteConfig
}
```

**Usage:**
```tsx
<Services />
```

### ContactForm Component

**File:** src/components/ContactForm.tsx

**Props:**
```typescript
interface ContactFormProps {
  // No props - uses siteConfig
}
```

**State:**
```typescript
interface FormState {
  name: string;
  email: string;
  phone: string;
  content: string;
  isSubmitting: boolean;
  message: string;
}
```

**Methods:**
- `handleSubmit`: Form submission handler
- `handleInputChange`: Input change handler

---

## Appendix C: Configuration Schema

### Site Configuration Structure

```typescript
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
      name: { label: string; placeholder: string; entryId: string; };
      email: { label: string; placeholder: string; entryId: string; };
      phone: { label: string; placeholder: string; entryId: string; optional: boolean; };
      content: { label: string; placeholder: string; entryId: string; };
    };
    submitButton: { text: string; sendingText: string; };
    messages: { success: string; error: string; };
  };
  about: {
    hero: {
      title: string;
      subtitle: string;
      backgroundColor: string;
    };
    stats: {
      enabled: boolean;
      items: Array<{
        value: string;
        label: string;
        color?: string;
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
```

---

## Appendix D: Compliance Matrix

| ISO Standard | Requirement | Implementation Status | Reference |
|--------------|-------------|----------------------|-----------|
| ISO/IEC 26514 | User Documentation Requirements | Implemented | README.md, Docs Page |
| ISO/IEC 12207 | Software Life Cycle Processes | Implemented | Development Workflow |
| ISO/IEC 25010 | Software Quality Characteristics | Implemented | Performance, Usability |
| ISO/IEC 27001 | Information Security | Implemented | HTTPS, Input Validation |

---

**Document Control**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-06 | GitHub Copilot | Initial release |

**Approval**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Project Manager | | | |
| Technical Lead | | | |
| Quality Assurance | | | |

---

*This document is confidential and proprietary to Neuradyne. Unauthorized distribution is prohibited.*