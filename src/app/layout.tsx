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
import { TransitionProvider } from "./TransitionProvider";
import Script from "next/script";

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
    <html
      suppressHydrationWarning={true}
      className={`${customFont.variable} ${customFont2.variable} font-sans`}
      lang="en"
    >
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-MMDTW7D83X"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MMDTW7D83X');
            `,
          }}
        />
      </head>

      <body className="max-w-screen overflow-x-hidden bg-white text-black dark:bg-black dark:text-white">
        {loading ? (
          <PreLoader />
        ) : (
          <SessionProvider>
            <ThemeProvider
              attribute="class"
              enableSystem={false}
              defaultTheme="light"
            >
              <TransitionProvider>
                <ToasterContext />
                <Header />
                {children}
                <div className="fixed left-0 top-0 z-50 h-screen w-4 border-r-[0.5px] border-dark-5 bg-transparent" />
                <div className="fixed right-0 top-0 z-50 h-screen w-4 border-l-[0.5px] border-dark-5 bg-transparent" />
                <Footer />
                <ScrollToTop />
              </TransitionProvider>
            </ThemeProvider>
          </SessionProvider>
        )}
      </body>
    </html>
  );
}
