import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReponsiveNav from "@/components/Home/Navbar/ReponsiveNav";

const inter = Inter({ subsets: ["vietnamese"] });

export const metadata: Metadata = {
  title: "Rimdasilva Dev Blog",
  description: "Rimdasilva Dev Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReponsiveNav />
        {children}
      </body>
    </html>
  );
}
