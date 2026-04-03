import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"; // Make sure the path matches your folder structure
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "London Emergency Plumber | 24/7 Service",
  description: "Professional plumbing services in London. 30-minute response time.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      // This helps prevent errors from browser extensions like "Dark Reader" or "Translate"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        {/* Navbar sits at the top of every page */}
        <Navbar />
      
        
        {/* We add pt-20 (padding-top) here so the content starts 
            below the fixed Navbar. 
        */}
        <main className="flex-grow pt-20">
          {children}
        </main>

        {/* You can add a <Footer /> here later */}
      </body>
    </html>
  );
}