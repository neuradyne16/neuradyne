# Neuradyne - From Idea to Scale

Welcome to Neuradyne's landing page! We transform your ideas into production-ready applications designed for scalable business growth. This modern landing page is built with React, Next.js, TailwindCSS, and Framer Motion.

## About Neuradyne

Neuradyne specializes in converting innovative ideas into fully-functional prototypes and production-ready applications. Our expert team guides businesses from concept to scalable solutions, ensuring your app is built on solid foundations and ready to grow.

## Table of Contents

- [Features](#features)
- [Our Services](#our-services)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features
- End-to-end development from idea to production
- Responsive and modern UI design
- Smooth animations and seamless user experiences
- Scalable architecture for growing businesses
- Performance optimized applications
- Dark/Light theme support
- Mobile-first design

## Our Services
- **Ideation & Strategy**: Transform your vision into actionable plans
- **Prototype Development**: Rapid prototyping to validate concepts
- **Production Applications**: Build scalable, enterprise-ready solutions
- **Technical Consultation**: Expert guidance for technical decisions

## Technologies Used
- **React**: Modern UI component library
- **Next.js**: Production-grade React framework with SSR
- **TailwindCSS**: Utility-first CSS for rapid styling
- **Framer Motion**: Smooth animations and transitions
- **TypeScript**: Type-safe development
- **Radix UI**: Accessible UI components
- **Next Themes**: Theme management

## Project Structure

```
neuradyne/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── about/page.tsx      # About page
│   │   └── contact/page.tsx    # Contact page
│   ├── assets/                 # Static assets (images, etc.)
│   ├── components/             # Reusable React components
│   │   ├── ui/                 # UI components (buttons, etc.)
│   │   ├── Hero.tsx            # Hero section
│   │   ├── Services.tsx        # Services section
│   │   ├── Activities.tsx      # Activities/Blog section
│   │   ├── Partners.tsx        # Partners section
│   │   ├── ContactForm.tsx     # Contact form
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Footer.tsx          # Site footer
│   │   └── ...
│   ├── config/
│   │   └── site.config.ts      # Site configuration and content
│   └── lib/
│       └── utils.ts            # Utility functions
├── public/                     # Public assets
├── components.json             # shadcn/ui configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── next.config.mjs             # Next.js configuration
├── postcss.config.mjs          # PostCSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies and scripts
```

## Installation

To get started with the Neuradyne landing page, clone the repository and install the dependencies:

```bash
git clone https://github.com/neuradyne16/neuradyne.git
cd neuradyne
npm install
```

## Usage

To start the development server, run:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the Neuradyne landing page.

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## Customization

The site content is primarily configured through `src/config/site.config.ts`. This file contains all the text, images, and settings for the site.

### Updating Site Content

1. Open `src/config/site.config.ts`
2. Modify the configuration object to update:
   - Header navigation links
   - Hero section content
   - Services descriptions
   - Partner logos
   - Activities/Blog posts
   - Contact information

### Adding Images

Place images in the `src/assets/` directory and import them in the config file:

```typescript
import heroImage from '@/assets/hero-image.jpg';

// Then use in config
hero: {
  headerImage: heroImage,
  // ...
}
```

### Styling

The site uses Tailwind CSS for styling. Customize colors, fonts, and spacing in `tailwind.config.ts`.

### Theme Support

The site includes dark/light theme support using `next-themes`. The theme toggle is available in the header.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

The built application can be deployed to any static hosting service:

```bash
npm run build
```

Upload the `.next` folder contents to your hosting provider.

## Getting Started with Neuradyne

Ready to turn your idea into reality? Here's how to work with us:

1. **Schedule a Consultation** - Let's discuss your vision
2. **Concept Development** - We create a detailed plan
3. **Prototype Phase** - Rapid iteration and validation
4. **Production Build** - Scalable, robust application development
5. **Launch & Support** - Deploy with confidence

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is private and proprietary to Neuradyne.


