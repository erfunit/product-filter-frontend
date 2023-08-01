"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="w-full bg-gray-600 py-3 text-lg">
      <div className="flex container items-center mx-auto 2xl:max-w-screen-xl justify-between ">
        <a
          className="font-light text-3xl text-white/50 hover:text-white/100 transition-all "
          href="https://github.com/erfunit"
        >
          Erfunit
        </a>
        <ul className="flex  gap-7">
          <li
            className={` px-9 py-2 transition-all rounded-full ${
              pathname == "/admin"
                ? "text-white/100 bg-white/20"
                : "text-white/60"
            }`}
          >
            <Link href="/admin">Admin</Link>
          </li>
          <li
            className={` px-9 py-2 transition-all rounded-full ${
              pathname == "/show"
                ? "text-white/100 bg-white/20"
                : "text-white/60"
            }`}
          >
            <Link href="/show">Show</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
