"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Companions", path: "/companions" },
  { name: "My Journey", path: "/my-journey" },
];

const NavItems = () => {
  const currentPath = usePathname();

  return (
    <nav className="flex items-center gap-6">
      {navItems.map((object) => {
        return (
          <Link
            href={object.path}
            key={object.name}
            className={cn(
              currentPath === object.path
                ? "font-semibold text-orange-500 underline"
                : ""
            )}
          >
            {object.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavItems;
