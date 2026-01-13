"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProductDemoConfig } from "@/config/demo.config";

interface DynamicDemoFormProps {
  config: ProductDemoConfig;
}

export const DynamicDemoForm = ({ config }: DynamicDemoFormProps) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
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

    setShowSuccess(false);
    setShowError(false);
    setIsSubmitting(true);

    const formDataToSubmit = new FormData();
    
    config.fields.forEach(field => {
      const value = formData[field.name] || '';
      if (value || field.required) {
        formDataToSubmit.append(field.entryId, value);
      }
    });

    try {
      await fetch(config.googleFormUrl, {
        method: "POST",
        mode: "no-cors",
        body: formDataToSubmit,
      });

      setShowSuccess(true);
      
      const resetData: Record<string, string> = {};
      config.fields.forEach(field => {
        resetData[field.name] = '';
      });
      setFormData(resetData);

      setTimeout(() => {
        const successElement = document.getElementById("successMessage");
        successElement?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 100);

      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      setShowError(true);
      console.error("Error:", error);

      setTimeout(() => {
        setShowError(false);
      }, 5000);
    } finally {
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
          {config.title}
        </h1>
        <p className="text-xl text-[#010D3E] dark:text-white tracking-tight mb-4">
          {config.subtitle}
        </p>
        <p className="text-base text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {config.description}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="backdrop-blur-xl bg-white/60 dark:bg-black/40 border border-slate-200/60 dark:border-slate-700/60 rounded-2xl shadow-lg p-8 md:p-12"
      >
        {showSuccess && (
          <motion.div
            id="successMessage"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg text-green-800 dark:text-green-200"
          >
            Thank you! Your demo request has been submitted successfully. We&apos;ll get back to you soon.
          </motion.div>
        )}

        {showError && (
          <motion.div
            id="errorMessage"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg text-red-800 dark:text-red-200"
          >
            Oops! Something went wrong. Please try again later.
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {config.fields.map((field) => (
            <div key={field.name} className="form-group">
              <label
                htmlFor={field.name}
                className="block text-sm font-medium text-gray-700 dark:text-white mb-2"
              >
                {field.label}
                {!field.required && (
                  <span className="text-gray-500 dark:text-gray-400 font-normal ml-2">
                    (Optional)
                  </span>
                )}
              </label>
              
              {field.type === 'textarea' ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  required={field.required}
                  rows={6}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 focus:border-black/40 dark:focus:border-white/40 transition-all bg-white/80 dark:bg-black/60 dark:text-white backdrop-blur-sm resize-none"
                />
              ) : (
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  required={field.required}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 focus:border-black/40 dark:focus:border-white/40 transition-all bg-white/80 dark:bg-black/60 dark:text-white backdrop-blur-sm"
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            disabled={isSubmitting}
            className="group relative overflow-hidden bg-black text-white px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center tracking-tight transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-black/20 active:scale-100 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 w-full md:w-auto dark:bg-white dark:text-black"
          >
            <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white dark:border-black border-t-transparent rounded-full animate-spin"></span>
                  Submitting...
                </span>
              ) : (
                'Book Demo'
              )}
            </span>
            <span className="absolute inset-0 rounded-lg bg-white/20 scale-0 transition-transform duration-500 ease-out group-hover:scale-100 group-hover:opacity-0" />
          </button>
        </form>
      </motion.div>
    </div>
  );
};