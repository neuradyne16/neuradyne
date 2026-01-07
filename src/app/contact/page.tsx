"use client";

import { ContactForm } from "@/components/ContactForm";
import { GridBackground } from "@/components/GridBackground";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine if dark mode is active
  const isDark = mounted && (theme === "dark" || resolvedTheme === "dark");

  if (isDark) {
    return (
      <GridBackground className="min-h-screen py-8">
        <ContactForm />
      </GridBackground>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <ContactForm />
    </div>
  );
}

