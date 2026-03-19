import type { Metadata } from "next";
import { Open_Sans, Lora } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400"],
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
  title: "Patek Philippe | Boutique",
  description: "For those who understand and why it matters",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${openSans.variable} ${lora.variable}`}>
      <body>{children}</body>
    </html>
  );
}
