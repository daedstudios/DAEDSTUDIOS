"use client";
import { signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import Image from "next/image";
// import Link from "next/link";
import { Link } from "next-transition-router";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Menu from "../Menu.tsx/Menu";

const Header = () => {
  const { data: session } = useSession();

  const pathUrl = usePathname();
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: any) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const { theme, setTheme } = useTheme();

  return (
    <>
      <header
        className={`ud-header left-0 top-0 z-50 flex w-screen items-center justify-between border-b-[0.5px] border-dark-5 px-8 xl:py-2 ${
          sticky
            ? "shadow-nav fixed z-[999] border-b border-stroke bg-white/80 backdrop-blur-[5px] dark:border-dark-3/20 dark:bg-black/85"
            : "absolute bg-transparent"
        }`}
      >
        <div className="w-60 -translate-x-10 scale-75">
          <Link
            href="/"
            onClick={(e) => pathUrl === "/" && e.preventDefault()}
            className={`block w-full`}
          >
            <>
              <Image
                src={`/images/logo/logo.svg`}
                alt="logo"
                width={240}
                height={30}
                className="w-full dark:hidden"
              />
              <Image
                src={`/images/logo/logo-white.svg`}
                alt="logo"
                width={240}
                height={30}
                className="hidden w-full dark:block"
              />
            </>
          </Link>
        </div>
        <div className="flex items-center gap-8 space-x-0 font-mono">
          <Link
            href="/"
            onClick={(e) => pathUrl === "/" && e.preventDefault()}
            className={`hidden md:block ${
              pathUrl === "/" ? "text-hover" : "hover:text-hover"
            }`}
          >
            home
          </Link>
          <Link
            href="/about"
            onClick={(e) => pathUrl === "/about" && e.preventDefault()}
            className={`hidden md:block ${
              pathUrl === "/about" ? "text-hover" : "hover:text-hover"
            }`}
          >
            about
          </Link>
          <Link
            href="/contact"
            onClick={(e) => pathUrl === "/contact" && e.preventDefault()}
            className={`hidden md:block ${
              pathUrl === "/contact" ? "text-hover" : "hover:text-hover"
            }`}
          >
            contact
          </Link>
          <Link
            href="/projects"
            onClick={(e) => pathUrl === "/projects" && e.preventDefault()}
            className={`hidden md:block ${
              pathUrl === "/projects" ? "text-hover" : "hover:text-hover"
            }`}
          >
            projects
          </Link>
          <Menu />
          <button
            aria-label="theme toggler"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-8 w-8 items-center justify-center text-body-color duration-300 dark:text-white"
          >
            <span>
              <svg
                viewBox="0 0 16 16"
                className="hidden h-[22px] w-[22px] fill-current dark:block"
              >
                <path d="M4.50663 3.2267L3.30663 2.03337L2.36663 2.97337L3.55996 4.1667L4.50663 3.2267ZM2.66663 7.00003H0.666626V8.33337H2.66663V7.00003ZM8.66663 0.366699H7.33329V2.33337H8.66663V0.366699V0.366699ZM13.6333 2.97337L12.6933 2.03337L11.5 3.2267L12.44 4.1667L13.6333 2.97337ZM11.4933 12.1067L12.6866 13.3067L13.6266 12.3667L12.4266 11.1734L11.4933 12.1067ZM13.3333 7.00003V8.33337H15.3333V7.00003H13.3333ZM7.99996 3.6667C5.79329 3.6667 3.99996 5.46003 3.99996 7.6667C3.99996 9.87337 5.79329 11.6667 7.99996 11.6667C10.2066 11.6667 12 9.87337 12 7.6667C12 5.46003 10.2066 3.6667 7.99996 3.6667ZM7.33329 14.9667H8.66663V13H7.33329V14.9667ZM2.36663 12.36L3.30663 13.3L4.49996 12.1L3.55996 11.16L2.36663 12.36Z" />
              </svg>

              <svg
                viewBox="0 0 23 23"
                className={`h-[30px] w-[30px] fill-current text-dark dark:hidden`}
              >
                <g clipPath="url(#clip0_40_125)">
                  <path d="M16.6111 15.855C17.591 15.1394 18.3151 14.1979 18.7723 13.1623C16.4824 13.4065 14.1342 12.4631 12.6795 10.4711C11.2248 8.47905 11.0409 5.95516 11.9705 3.84818C10.8449 3.9685 9.72768 4.37162 8.74781 5.08719C5.7759 7.25747 5.12529 11.4308 7.29558 14.4028C9.46586 17.3747 13.6392 18.0253 16.6111 15.855Z" />
                </g>
              </svg>
            </span>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
