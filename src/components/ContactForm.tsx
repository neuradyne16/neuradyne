"use client";

import { siteConfig } from "@/config/site.config";
import { useState } from "react";
import { motion } from "framer-motion";

export const ContactForm = () => {
  const { contact } = siteConfig;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    content: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Hide any previous messages
    setShowSuccess(false);
    setShowError(false);

    // Set submitting state
    setIsSubmitting(true);

    // Create FormData for Google Forms
    const formDataToSubmit = new FormData();
    formDataToSubmit.append(contact.fields.name.entryId, formData.name);
    formDataToSubmit.append(contact.fields.email.entryId, formData.email);
    formDataToSubmit.append(contact.fields.phone.entryId, formData.phone);
    formDataToSubmit.append(contact.fields.content.entryId, formData.content);

    try {
      // Submit to Google Form
      await fetch(contact.googleFormUrl, {
        method: "POST",
        mode: "no-cors",
        body: formDataToSubmit,
      });

      // Show success message
      setShowSuccess(true);
      setFormData({ name: "", email: "", phone: "", content: "" });

      // Scroll to success message
      setTimeout(() => {
        const successElement = document.getElementById("successMessage");
        successElement?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 100);

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      // Show error message
      setShowError(true);
      console.error("Error:", error);

      // Hide error message after 5 seconds
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    } finally {
      // Re-enable button
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 lg:px-12 py-12 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] dark:from-white dark:to-white text-transparent bg-clip-text mb-4">
          {contact.title}
        </h1>
        <p className="text-xl text-[#010D3E] dark:text-white tracking-tight">
          {contact.subtitle}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="backdrop-blur-xl bg-white/60 dark:bg-black/40 border border-slate-200/60 dark:border-slate-700/60 rounded-2xl shadow-lg p-8 md:p-12"
      >
        {/* Success Message */}
        {showSuccess && (
          <motion.div
            id="successMessage"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg text-green-800 dark:text-green-200"
          >
            {contact.messages.success}
          </motion.div>
        )}

        {/* Error Message */}
        {showError && (
          <motion.div
            id="errorMessage"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg text-red-800 dark:text-red-200"
          >
            {contact.messages.error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="form-group">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-white mb-2"
            >
              {contact.fields.name.label}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder={contact.fields.name.placeholder}
              className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 focus:border-black/40 dark:focus:border-white/40 transition-all bg-white/80 dark:bg-black/60 dark:text-white backdrop-blur-sm"
            />
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-white mb-2"
            >
              {contact.fields.email.label}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder={contact.fields.email.placeholder}
              className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 focus:border-black/40 dark:focus:border-white/40 transition-all bg-white/80 dark:bg-black/60 dark:text-white backdrop-blur-sm"
            />
          </div>

          {/* Phone Field */}
          <div className="form-group">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 dark:text-white mb-2"
            >
              {contact.fields.phone.label}
              {contact.fields.phone.optional && (
                <span className="text-gray-500 dark:text-gray-400 font-normal ml-2">(Optional)</span>
              )}
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={contact.fields.phone.placeholder}
              className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 focus:border-black/40 dark:focus:border-white/40 transition-all bg-white/80 dark:bg-black/60 dark:text-white backdrop-blur-sm"
            />
          </div>

          {/* Content/Message Field */}
          <div className="form-group">
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700 dark:text-white mb-2"
            >
              {contact.fields.content.label}
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
              rows={6}
              placeholder={contact.fields.content.placeholder}
              className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 focus:border-black/40 dark:focus:border-white/40 transition-all bg-white/80 dark:bg-black/60 dark:text-white backdrop-blur-sm resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="group relative overflow-hidden bg-black text-white px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center tracking-tight transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-black/20 active:scale-100 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 w-full md:w-auto dark:bg-white dark:text-black"
          >
            <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  {contact.submitButton.sendingText}
                </span>
              ) : (
                contact.submitButton.text
              )}
            </span>
            {/* Ripple effect */}
            <span className="absolute inset-0 rounded-lg bg-white/20 scale-0 transition-transform duration-500 ease-out group-hover:scale-100 group-hover:opacity-0" />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

