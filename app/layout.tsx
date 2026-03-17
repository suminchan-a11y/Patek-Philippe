import type { Metadata } from "next";
import { Lora, Open_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Patek Philippe — The Hourglass, Singapore",
  description:
    "An invitation to experience one of the world's finest horological collections. Visit our boutique on Orchard Road.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${openSans.variable}`}>
        <SmoothScroll>
          <Nav />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
