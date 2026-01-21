import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ContactHub from "@/components/ContactHub";
import toast, { Toaster } from 'react-hot-toast';
import TopNavbar from "@/components/TopNavbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Freelance Academy — Empowering Digital Careers",
  description: "Your Gateway to Digital Excellence",
  icons: {
    icon: "/favicon.jpg",
  },

};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopNavbar></TopNavbar>
        <Navbar></Navbar>
        {children}

        <Footer></Footer>
      <Toaster />

      <div>
        <ContactHub></ContactHub>
      </div>

      </body>
    </html>
  );
}
