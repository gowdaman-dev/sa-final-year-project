"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaMagnifyingGlass, FaX } from "react-icons/fa6";
import { Dancing_Script } from "next/font/google";
import { motion } from "framer-motion";
export const fancyFont = Dancing_Script({
  weight: ["400", "700"],
  subsets: ["latin"],
});
function NavBar() {
  const [openNav, setOpenNav] = useState(false);
  // WINDOW WIDTH
  const [windowWidth, setWindowWidth] = useState(0);
  const lg = 1024;
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);
  return (
    <nav className="w-screen h-[4rem] border-b flex items-center justify-between lg:px-12 px-8 gap-4">
      <h1 className={fancyFont.className + " font-black text-2xl"}>
        LearnoPedia
      </h1>
      <div className="flex items-center justify-center gap-1 border rounded-full px-1 md:w-1/3">
        <input
          type="text"
          placeholder="What do you want to Learn?"
          className="p-2 rounded-full outline-none w-full"
        />
        <button className="p-2 border rounded-full">
          <FaMagnifyingGlass className="text-primary" />
        </button>
      </div>
      <div className="flex items-center justify-center gap-4">
        <motion.div
          animate={
            windowWidth <= lg
              ? openNav
                ? { y: "0%" }
                : { y: "-100%" }
              : { y: "0%" }
          }
          transition={{ duration: 0.5 , ease: "easeInOut" }}
          className="flex items-center justify-center gap-4 max-lg:absolute top-0 left-0 max-lg:w-screen max-lg:h-fit max-lg:flex-col max-lg:bg-white max-lg:py-[4rem] max-lg:border-b max-lg:shadow-md max-lg:tracking-wider max-lg:translate-y-[-100%]"
        >
          <button onClick={() => setOpenNav(!openNav)} className="lg:hidden">
            <FaX />
          </button>
          <Link
            href="/"
            className="hover:text-zinc-600 transition-all ease-linear duration-300"
          >
            Cources
          </Link>
          <Link
            href="/"
            className="hover:text-zinc-600 transition-all ease-linear duration-300"
          >
            About
          </Link>
          <Link
            href="/"
            className="hover:text-zinc-600 transition-all ease-linear duration-300"
          >
            Contact
          </Link>
          <Link
            href="/"
            className="border px-4 rounded-md p-1 border-primary text-primary"
          >
            Register
          </Link>
          <Link
            href="/"
            className="border px-4 rounded-md p-1 bg-primary text-white"
          >
            Login
          </Link>
        </motion.div>
        <button onClick={() => setOpenNav(!openNav)} className="lg:hidden p-1">
          <FaBars />
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
