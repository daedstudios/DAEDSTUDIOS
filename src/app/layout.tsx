"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";
import ToasterContext from "./api/contex/ToasetContex";
import { useEffect, useState } from "react";
import PreLoader from "@/components/Common/PreLoader";
import localFont from "next/font/local";

const customFont = localFont({
    src: [
      {
        path: "/Anton-Regular.ttf",
        weight: "normal",
        style: "normal",
    },
    ],
  variable: "--custom",   
  });

const customFont2 = localFont({
  src: [
  
    {
      path: "/Roboto-VariableFont_wdth,wght.ttf",
      weight: "normal",
      style: "normal",
    },    
  ],
  variable: "--custom-two", 
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  // Font files can be colocated inside of `app`
  
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html suppressHydrationWarning={true} className={`${customFont.variable} ${customFont2.variable} font-sans`} lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className="max-w-screen overflow-x-hidden">
        {loading ? (
          <PreLoader />
        ) : (
          <SessionProvider>
            <ThemeProvider
              attribute="class"
              enableSystem={false}
              defaultTheme="light"
            >
              <ToasterContext />
              <Header />
              {children}
              <Footer />
              <ScrollToTop />
            </ThemeProvider>
          </SessionProvider>
        )}
      </body>
    </html>
  );
}
