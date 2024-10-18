import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import CustomFooter from "./ui/customFooter";
import HeroSection from "./ui/heroSection";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Auto Win Register",
  description: "lorem ipsum dolor sit amet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gray-100 h-full min-h-screen`}
      >
        <main className="sm:mx-auto sm:w-full sm:max-w-md lg:max-w-5xl h-full min-h-screen">
          <HeroSection />
          <div className="bg-white shadow verflow-hidden flex flex-col h-full">
            {children}
          </div>
        </main>
        <CustomFooter />
      </body>
    </html>
  );
}
