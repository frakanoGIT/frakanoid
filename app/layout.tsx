import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const OPENSANS = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "frakanoid's Homepage",
  description: "Welcome to my portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${OPENSANS.className} text-gray-700`}>
        <div className="mx-auto xl:max-w-7xl xl:border-2 xl:border-gray-300 xl:mt-8 rounded-3xl xl:shadow-xl">
          <Header />
          <main className="max-w-xl mx-auto pt-10 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-4">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
