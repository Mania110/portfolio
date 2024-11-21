import Link from "next/link";
import React from "react";

interface NavLinkProps {
  href: string;
  title: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
  return (
    <Link href={href} className="block py-3 pl-3 pr-4 text-white">
      {title}
    </Link>
  );
};
