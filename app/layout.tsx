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
          <main className="mx-auto max-w-lg min-h-2.5xl h-full lg:max-w-5xl">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
