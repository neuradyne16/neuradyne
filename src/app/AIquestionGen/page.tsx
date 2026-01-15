"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { aiQuestionGenConfig } from "@/config/AIquestionGen.config";
import Videobutton from "@/components/VideodilogButton";

// Icon Components
const PlayIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z"
      clipRule="evenodd"
    />
  </svg>
);

const DocumentIcon = () => (
  <svg
    className="w-16 h-16 text-gray-600 dark:text-gray-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

const CubeIcon = () => (
  <svg
    className="w-16 h-16 text-gray-600 dark:text-gray-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
    />
  </svg>
);

const FileIcon = () => (
  <svg
    className="w-16 h-16 text-gray-600 dark:text-gray-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

const MailIcon = () => (
  <svg
    className="w-16 h-16 text-gray-600 dark:text-gray-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const LockIcon = () => (
  <svg
    className="w-16 h-16 text-gray-600 dark:text-gray-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg
    className="w-6 h-6 text-gray-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

const getIconComponent = (icon: string) => {
  const icons: { [key: string]: JSX.Element } = {
    document: <DocumentIcon />,
    cube: <CubeIcon />,
    file: <FileIcon />,
    mail: <MailIcon />,
    lock: <LockIcon />,
  };
  return icons[icon] || <DocumentIcon />;
};

export default function AIQuestionGeneratorPage() {
  const config = aiQuestionGenConfig;

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#BAE6FD_0%,#F0F9FF_70%)] dark:bg-[radial-gradient(ellipse_200%_100%_at_top_right,#020617_0%,#000000_70%)]">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-5 lg:px-20">
        <div className="container mx-auto text-center">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-800 dark:text-gray-100 mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {config.hero.title}
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-6 md:mb-8 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {config.hero.subtitle}
          </motion.p>

          {/* <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-6 md:mb-8 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {config.hero.subsubtitle}
          </motion.p>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-6 md:mb-8 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {config.hero.ssstitle}
          </motion.p> */}
          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 md:mb-8 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {config.hero.buttons.map((button, idx) =>
              button.text === "Watch Video" ? (
                <Videobutton key={idx} />
              ) : (
                <Link
                  key={idx}
                  href={button.href ?? ""}
                  className={`
        w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold transition-all 
        flex items-center justify-center gap-2
        ${
          button.variant === "primary"
            ? "bg-gray-700 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700 text-white shadow-lg"
            : "bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600"
        }
      `}
                >
                  {button.icon === "play" && <PlayIcon />}
                  {button.text}
                </Link>
              )
            )}
          </motion.div>

          {/* Security Features */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-3 md:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 md:mb-4 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {config.hero.securityFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <ShieldIcon />
                <span>{feature}</span>
                {idx < config.hero.securityFeatures.length - 1 && (
                  <span className="ml-2 text-gray-400">•</span>
                )}
              </div>
            ))}
          </motion.div>

          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 italic px-4">
            {config.hero.sourceNote}
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-12 md:py-16 px-5 lg:px-20 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-3 md:mb-4">
              {config.problem.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 px-4">
              {config.problem.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mb-4 px-4">
            {config.problem.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-200 dark:bg-gray-800 p-6 md:p-8 rounded-xl text-center shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-center text-gray-500 dark:text-gray-500 italic px-4">
            {config.problem.sourceNote}
          </p>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-12 md:py-16 px-5 lg:px-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-3 md:mb-4">
            {config.solution.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto px-4">
            {config.solution.subtitle}
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-12 md:py-16 px-5 lg:px-20 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 text-center mb-12 md:mb-16 px-4">
            {config.process.title}
          </h2>

          {/* Desktop View - Horizontal */}
          <div className="hidden lg:flex items-start justify-center gap-4 xl:gap-8">
            {config.process.steps.map((step, idx) => (
              <React.Fragment key={idx}>
                <motion.div
                  className="flex flex-col items-center max-w-[180px] text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                >
                  <div className="relative mb-4">
                    <div className="absolute -top-2 -left-2 w-8 h-8 bg-gray-700 dark:bg-gray-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {step.number}
                    </div>
                    {getIconComponent(step.icon)}
                  </div>
                  <h3 className="text-base font-bold text-gray-800 dark:text-gray-100 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </motion.div>
                {idx < config.process.steps.length - 1 && (
                  <div className="flex items-center pt-8">
                    <ArrowIcon />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile/Tablet View - Vertical */}
          <div className="lg:hidden space-y-6 max-w-md mx-auto px-4">
            {config.process.steps.map((step, idx) => (
              <motion.div
                key={idx}
                className="flex gap-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gray-700 dark:bg-gray-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Boards Carousel */}
      <section className="py-12 md:py-16 px-5 lg:px-20">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 text-center mb-8 md:mb-12 px-4">
            {config.examBoards.title}
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            {config.examBoards.logos.map((logo, idx) => (
              <motion.div
                key={idx}
                className="flex items-center justify-center px-6 py-4 bg-white dark:bg-gray-800 rounded-lg shadow-md min-w-[120px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-xl md:text-2xl font-bold text-gray-700 dark:text-gray-300">
                  {logo.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 px-5 lg:px-20 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 text-center mb-8 md:mb-12 px-4">
            {config.cta.title}
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-4xl mx-auto px-4">
            {config.cta.buttons.map((button, idx) => (
              <Link
                key={idx}
                href={button.href}
                className={`
                  w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold transition-all text-center
                  ${
                    button.variant === "primary"
                      ? "bg-gray-700 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700 text-white shadow-lg"
                      : button.variant === "secondary"
                      ? "bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600"
                      : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200"
                  }
                `}
              >
                {button.text}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
