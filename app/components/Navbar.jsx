import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="header" className="w-full" />
      </div>
      <nav
        className={`w-full fixed z-50 ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8 xl:px-10 flex justify-between items-center py-4">
          <a href="#top">
            <Image
              src={isDarkMode ? assets.logo_dark : assets.logo}
              className="w-28 cursor-pointer mr-14"
              alt="Logo"
            />
          </a>
          <ul
            className={`hidden md:flex item-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
              isScroll
                ? ""
                : " bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
            }`}
          >
            <motion.li
              whileHover={{ translateY: -3 }}
              transition={{ duration: 0.1 }}
            >
              <a className="font-Ovo" href="#top">
                Home
              </a>
            </motion.li>
            <motion.li
              whileHover={{ translateY: -3 }}
              transition={{ duration: 0.1 }}
            >
              <a className="font-Ovo" href="#about">
                About me
              </a>
            </motion.li>
            <motion.li
              whileHover={{ translateY: -3 }}
              transition={{ duration: 0.1 }}
            >
              <a className="font-Ovo" href="#services">
                My skills
              </a>
            </motion.li>
            <motion.li
              whileHover={{ translateY: -3 }}
              transition={{ duration: 0.1 }}
            >
              <a className="font-Ovo" href="#work">
                My work
              </a>
            </motion.li>
            <motion.li
              whileHover={{ translateY: -3 }}
              transition={{ duration: 0.1 }}
            >
              <a className="font-Ovo" href="#contact">
                Contact me
              </a>
            </motion.li>
          </ul>

          <div className="flex items-center gap-4">
            <button onClick={() => setIsDarkMode((prev) => !prev)}>
              <Image
                src={isDarkMode ? assets.sun_icon : assets.moon_icon}
                alt="dark_mode"
                className="w-6"
              />
            </button>
            <a
              href="#contact"
              className="hidden lg:flex item-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"
            >
              Contact
              <Image
                src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
                alt="contact"
                className="w-5 my-auto"
              />
            </a>

            <button className="block md:hidden ml-3" onClick={openMenu}>
              <Image
                src={isDarkMode ? assets.menu_white : assets.menu_black}
                alt="menu"
                className="w-6"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* ------Mobile Menu------ */}

      <ul
        ref={sideMenuRef}
        className="flex md:hidden flex-col gap-4 px-10 py-20 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-500 dark:bg-darkHover dark:text-white"
      >
        <div className="absolute right-6 top-6" onClick={closeMenu}>
          <Image
            src={isDarkMode ? assets.close_white : assets.close_black}
            alt="close"
            className="w-5 cursor-pointer"
          />
        </div>

        <li>
          <a className="font-Ovo" onClick={closeMenu} href="#top">
            Home
          </a>
        </li>
        <li>
          <a className="font-Ovo" onClick={closeMenu} href="#about">
            About me
          </a>
        </li>
        <li>
          <a className="font-Ovo" onClick={closeMenu} href="#services">
            My skills
          </a>
        </li>
        <li>
          <a className="font-Ovo" onClick={closeMenu} href="#work">
            My work
          </a>
        </li>
        <li>
          <a className="font-Ovo" onClick={closeMenu} href="#contact">
            Contact me
          </a>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
