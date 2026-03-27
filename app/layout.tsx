import type { Metadata } from "next";
import { Open_Sans, Lora } from "next/font/google";
import SmoothScroll from "./components/SmoothScroll";
import LoadingListener from "./components/LoadingListener";
import PasswordGate from "./components/PasswordGate";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Patek Philippe — Suria KLCC Boutique",
  description: "Enter a space where time is kept differently.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${openSans.variable} ${lora.variable}`}>
      <body>
        <PasswordGate>
          <SmoothScroll>{children}</SmoothScroll>
          <LoadingListener />
        </PasswordGate>
      </body>
    </html>
  );
}
