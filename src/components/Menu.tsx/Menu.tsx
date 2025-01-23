import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "next-transition-router";
import { usePathname } from "next/navigation";
gsap.registerPlugin(useGSAP);

const Menu = () => {
  const menuContainer = React.useRef(null);

  const tl = React.useRef(gsap.timeline({ paused: true }));

  useGSAP(() => {
    const menuElement = menuContainer.current;
    if (!menuElement) return;

    tl.current.fromTo(
      menuElement,
      {
        height: "0",
        opacity: 0,
        display: "none",
      },
      {
        height: "100vh",
        opacity: 1,
        duration: 0.7,
        ease: "power2",
        display: "flex",
      },
    );

    // Add display: none when animation reverses
    tl.current.eventCallback("onReverseComplete", () => {
      gsap.set(menuElement, { display: "none" });
    });
  }, []);

  const pathUrl = usePathname(); // Adding underscore to indicate it's intentionally unused for now

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    if (pathUrl !== href) {
      tl.current.reverse();
    } else {
      e.preventDefault();
      tl.current.reverse();
    }
  };

  return (
    <>
      <div
        onClick={() => {
          tl.current.play();
        }}
        className="cursor-pointer hover:text-hover md:hidden"
      >
        menu
      </div>
      <div
        className="absolute left-0 top-0 z-10 hidden h-0 w-screen flex-col items-center justify-center gap-4 bg-white font-mono text-3xl opacity-0 dark:bg-black"
        ref={menuContainer}
      >
        {[
          { href: "/", text: "home" },
          { href: "/about", text: "about" },
          { href: "/contact", text: "contact" },
          { href: "/blogs", text: "projects" },
        ].map(({ href, text }) => (
          <Link
            key={href}
            href={href}
            onClick={(e) => handleLinkClick(e, href)}
            className={` ${
              pathUrl === href ? "text-hover" : "hover:text-hover"
            }`}
          >
            {text}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Menu;
