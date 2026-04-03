import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ContactHub from "@/components/ContactHub";
import toast, { Toaster } from "react-hot-toast";
import TopNavbar from "@/components/TopNavbar";
import Scrollbar from "@/components/Scrollbar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
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
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${poppins.variable} antialiased`}>
        <Scrollbar>
          <TopNavbar></TopNavbar>
          <Navbar></Navbar>
          {children}

          <Footer></Footer>
          <Toaster />

          <div>
            <ContactHub></ContactHub>
          </div>
        </Scrollbar>
      </body>
    </html>
  );
}
