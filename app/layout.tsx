import React from "react";

import type { Metadata } from "next";
import localFont from "next/font/local";

import { ToasterProvider } from "@/providers/toast-provider";

import "./globals.css";

import { GlobalContextProvider } from "./context/store";

const hero = localFont({
  src: [
    {
      path: "../fonts/HeroLight200.otf",
      weight: "200",
    },
    {
      path: "../fonts/HeroRegular400.otf",
      weight: "400",
    },
    {
      path: "../fonts/HeroBold700.otf",
      weight: "700",
    },
  ],
});

export const metadata: Metadata = {
  title: "Waves & more",
  description: "We sail. You dream. Discover Croatia where endless coastline meets millennia of rich history."
  // openGraph: {
  //   title: "Waves & more",
  //   description:
  //     "We sail. You dream. Discover Croatia where endless coastline meets millennia of rich history.",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={hero.className}>
        <GlobalContextProvider>
          <ToasterProvider />
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  );
}
