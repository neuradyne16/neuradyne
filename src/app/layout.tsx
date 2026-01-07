import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neuradyne",
  description: "Neuradyne is a cutting-edge platform for AI-driven solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={twMerge(
          dmSans.className,
              `
        antialiased
        bg-[radial-gradient(ellipse_200%100%_at_bottom_left,#BAE6FD_0%,#F0F9FF_70%)]
        dark:bg-[radial-gradient(ellipse_200%100%_at_top_right,#020617_0%,#000000_70%)]
    `
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
