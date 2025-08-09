import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import { Playfair_Display, Montserrat } from "next/font/google";

// Load fonts
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Architect Design Studio",
  description: "Modern architecture and design portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${playfair.variable} ${montserrat.variable} antialiased`}
      >
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
