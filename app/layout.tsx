import { ClerkProvider, SignOutButton } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/navbar/Navbar';
import Providers from "./providers";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HomeAway",
  description: "Fell at home, away from home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning>
        <body className={inter.className}>
          <Providers>
           
            <Navbar />
           
            <main className='container py-10'>{children}</main>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}