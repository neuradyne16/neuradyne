'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { omniVisionConfig } from '@/config/omnivision.config';

// Icons as SVG components
const CameraIcon = () => (
  <svg className="w-16 h-16 mx-auto mb-4 text-sky-700 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const AlertIcon = () => (
  <svg className="w-16 h-16 mx-auto mb-4 text-sky-700 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-16 h-16 mx-auto mb-4 text-sky-700 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ArrowIcon = () => (
  <svg className="w-8 h-8 text-sky-400 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export default function OmniVisionPage() {
  const config = omniVisionConfig;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-5 lg:px-20">
        <div className="container mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-sky-900 to-blue-800 dark:from-white dark:to-blue-400 text-transparent bg-clip-text mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {config.hero.title}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-sky-800 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {config.hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Problem Section with Stats */}
      <section className="py-16 px-5 lg:px-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Phone Mockup */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-64 h-[500px] bg-gray-200 dark:bg-gray-800 rounded-3xl shadow-2xl border-8 border-gray-800 dark:border-gray-700">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 dark:bg-gray-700 rounded-b-2xl"></div>
                <div className="p-8 mt-8 flex flex-col items-center justify-center h-full">
                  <motion.div
                    className="w-32 h-32 bg-gray-300 dark:bg-gray-700 rounded-lg mb-8 flex items-center justify-center overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image src={config.hero.image} alt="Demo Phone" className="w-full h-full object-cover" />
                  </motion.div>
                  {config.demoPhone.enabled && (
                    <motion.button
                      className="bg-sky-700 hover:bg-sky-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {config.demoPhone.buttonText}
                    </motion.button>
                  )}
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-4 text-center italic">
                    {config.demoPhone.description}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stats and Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-sky-900 dark:text-white mb-4">
                {config.problem.title}
              </h2>
              <p className="text-lg text-sky-800 dark:text-gray-300 mb-8">
                {config.problem.subtitle}
              </p>

{/* Stats Grid */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
  {config.problem.stats.map((stat, idx) => (
    <div
      key={idx}
      className="
        w-full
        bg-sky-700 dark:bg-blue-600 text-white
        px-4 py-6 sm:px-5 sm:py-7
        rounded-xl shadow-lg
        flex flex-col items-center justify-center
        text-center
        overflow-hidden
      "
    >
      <div className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight whitespace-normal break-words">
        {stat.value}
      </div>

      <div className="mt-2 text-sm sm:text-base leading-snug max-w-[90%] break-words">
        {stat.label}
      </div>
    </div>
  ))}
</div>



              {/* Live Toll */}
              {config.problem.liveToll.enabled && (
                <motion.div
                  className="bg-sky-800 dark:bg-blue-700 text-white p-6 rounded-lg shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{config.problem.liveToll.title}</h3>
                    <motion.svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                    </motion.svg>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-4xl font-bold">{config.problem.liveToll.deaths}</div>
                      <div className="text-sm">Deaths</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold">{config.problem.liveToll.injuries}</div>
                      <div className="text-sm">Injuries Reported</div>
                    </div>
                  </div>
                  <div className="text-xs mt-2 opacity-75">* {config.problem.liveToll.timeframe}</div>
                </motion.div>
              )}

              {config.problem.sourceNote && (
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-4">{config.problem.sourceNote}</p>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem in Numbers */}
      <section className="py-16 px-5 lg:px-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto">
          <motion.div
            className="flex items-center justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <svg className="w-8 h-8 text-sky-700 dark:text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <h2 className="text-3xl md:text-4xl font-bold text-sky-900 dark:text-white">
              {config.problemNumbers.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {config.problemNumbers.cards.map((card, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl font-bold text-sky-800 dark:text-blue-400 mb-2">{card.value}</div>
                <div className="text-sm font-semibold text-sky-900 dark:text-gray-300 mb-1">{card.label}</div>
                {card.sublabel && (
                  <div className="text-xs text-gray-600 dark:text-gray-400">{card.sublabel}</div>
                )}
              </motion.div>
            ))}
          </div>

          {config.problemNumbers.sourceNote && (
            <p className="text-xs text-gray-600 dark:text-gray-400 text-right">{config.problemNumbers.sourceNote}</p>
          )}
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-5 lg:px-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-4">
              <svg className="w-10 h-10 text-sky-700 dark:text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
              </svg>
              <h2 className="text-3xl md:text-4xl font-bold text-sky-900 dark:text-white">
                {config.solution.title}
              </h2>
            </div>
            <p className="text-lg text-sky-800 dark:text-gray-300 italic">{config.solution.subtitle}</p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {config.solution.steps.map((step, idx) => (
              <React.Fragment key={idx}>
                <motion.div
                  className="text-center max-w-xs"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {step.icon === 'camera' && <CameraIcon />}
                  {step.icon === 'alert' && <AlertIcon />}
                  {step.icon === 'response' && <CheckIcon />}
                  <h3 className="text-xl font-bold text-sky-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-sky-800 dark:text-gray-300">{step.description}</p>
                </motion.div>
                {idx < config.solution.steps.length - 1 && (
                  <motion.div
                    className="hidden md:block"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.2 + 0.3 }}
                  >
                    <ArrowIcon />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-5 lg:px-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Get In Touch */}
            {config.cta.getInTouch.enabled && (
              <motion.div
                className="bg-gradient-to-br from-sky-100 to-blue-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-lg text-center shadow-xl border border-sky-200 dark:border-gray-700"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-sky-900 dark:text-white mb-2">
                  {config.cta.getInTouch.title}
                </h3>
                <p className="text-sky-800 dark:text-gray-300 mb-2">{config.cta.getInTouch.subtitle}</p>
                <p className="text-sm text-sky-700 dark:text-gray-400 mb-6">{config.cta.getInTouch.contactText}</p>
                <Link
                  href={config.cta.getInTouch.buttonLink}
                  className="inline-block bg-sky-700 hover:bg-sky-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg"
                >
                  {config.cta.getInTouch.buttonText}
                </Link>
              </motion.div>
            )}

            {/* Request Demo */}
            {config.cta.requestDemo.enabled && (
              <motion.div
                className="bg-gradient-to-br from-blue-50 to-sky-50 dark:from-gray-900 dark:to-gray-800 p-8 rounded-lg text-center shadow-xl border-2 border-sky-300 dark:border-blue-600"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-sky-900 dark:text-white mb-2">
                  {config.cta.requestDemo.title}
                </h3>
                <p className="text-sky-800 dark:text-gray-300 mb-2">{config.cta.requestDemo.subtitle}</p>
                <p className="text-sm text-sky-700 dark:text-gray-400 mb-6">{config.cta.requestDemo.demoText}</p>
                <Link
                  href={config.cta.requestDemo.buttonLink}
                  className="inline-block bg-sky-800 hover:bg-sky-900 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg"
                >
                  {config.cta.requestDemo.buttonText}
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}