"use client";

import { useRouter, usePathname } from "next/navigation";
import { animatePageOut } from "./Animation";

export default function AnimatedLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const router = useRouter();
  const pathUrl = usePathname();
  const handleClick = () => {
    if (pathUrl === href) return;
    animatePageOut(href, router);
  };

  return (
    <button
      className={`cursor-pointer ${
        pathUrl === href ? "text-hover" : "hover:text-hover"
      }`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
}
