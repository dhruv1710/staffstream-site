import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Staffstream - Enterprise Workflow Automation Platform",
  description: "Streamline your enterprise workflow with Staffstream - Attendance, Branches, Departments, Employee & Leave Management",
  keywords: "staffstream, workflow automation, attendance management, employee management, leave management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90`}
      >
        {children}
      </body>
    </html>
  );
}
