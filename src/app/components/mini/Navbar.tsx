'use client';
import { CircleUser, Search, ShoppingCart, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  // State to manage menu open/close
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Function to toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Helper function to determine if the link is active
  const isActive = (path: string) => pathname === path;
// ================------------------==================--------------------
  return (
    <>
      <div className="relative">
        {/* ============================== Main Navbar ============================= */}
        <div className="head flex justify-between items-center m-4">
          {/* Logo */}
          <div>
            <h1 className="text-2xl font-bold">Avion</h1>
          </div>

          {/* Navigation Links (Hidden on small screens) */}
          <div>
            <ul className="hidden md:flex gap-6 text-gray-500 items-center">
              <li>
                <Link
                  href="/"
                  className={`hover:underline decoration-[#2A254B] ${
                    isActive("/") ? "font-bold" : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/About"
                  className={`hover:underline decoration-[#2A254B] ${
                    isActive("/About") ? "font-bold" : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  About Us
                </Link>
              </li>
            
              <li>
                <Link
                  href="/Contact"
                  className={`hover:underline decoration-[#2A254B] ${
                    isActive("/Contact") ? "font-bold" : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  Contact Us
                </Link>
              </li>
              {/* Icons */}
              <li>
                <Search className="cursor-pointer" aria-label="Search" />
              </li>
              <li>
                <ShoppingCart className="cursor-pointer" aria-label="Shopping Cart" />
              </li>
              <li>
                <CircleUser className="cursor-pointer" aria-label="User Profile" />
              </li>
            </ul>

            {/* Menu Icon for small screens */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} aria-label="Toggle Menu">
                {isOpen ? (
                  <X className="w-6 h-6 text-gray-500" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-500" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* ============================== Dropdown Menu ============================= */}
        {isOpen && (
          <div className="md:hidden bg-[#F9F9F9] text-gray-500 absolute top-16 left-0 w-full shadow-lg z-50 transition-transform duration-300 ease-in-out">
            <ul className="flex flex-col items-center gap-4 py-4">
              <li>
                <Link
                  href="/"
                  className={`hover:underline decoration-[#2A254B] ${
                    isActive("/") ? "font-bold" : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/About"
                  className={`hover:underline decoration-[#2A254B] ${
                    isActive("/About") ? "font-bold" : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  About Us
                </Link>
              </li>
           
              <li>
                <Link
                  href="/Contact"
                  className={`hover:underline decoration-[#2A254B] ${
                    isActive("/Contact") ? "font-bold" : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  Contact Us
                </Link>
              </li>
              {/* Icons */}
              <li>
                <Search className="cursor-pointer" aria-label="Search" />
              </li>
              <li>
                <ShoppingCart className="cursor-pointer" aria-label="Shopping Cart" />
              </li>
              <li>
                <CircleUser className="cursor-pointer" aria-label="User Profile" />
              </li>
            </ul>
          </div>
        )}

        {/* ============================== Categories Navbar ============================= */}
        <div className="flex justify-center items-center text-xl text-gray-500 bg-[#F9F9F9]">
          {/* Categories (Hidden on small screens) */}
          <ul className="hidden md:flex gap-6 my-6">
            <li className="hover:underline decoration-[#2A254B]">All products</li>
            <li className="hover:underline decoration-[#2A254B]">Plant pots</li>
            <li className="hover:underline decoration-[#2A254B]">Ceramics</li>
            <li className="hover:underline decoration-[#2A254B]">Tables</li>
            <li className="hover:underline decoration-[#2A254B]">Chairs</li>
            <li className="hover:underline decoration-[#2A254B]">Crockery</li>
            <li className="hover:underline decoration-[#2A254B]">Tableware</li>
            <li className="hover:underline decoration-[#2A254B]">Cutlery</li>
          </ul>

          {/* Categories Dropdown (Visible on small screens when menu is open) */}
          {isOpen && (
            <ul className="flex flex-col items-center gap-4 my-6">
              <li className="hover:underline decoration-[#2A254B]">All products</li>
              <li className="hover:underline decoration-[#2A254B]">Plant pots</li>
              <li className="hover:underline decoration-[#2A254B]">Ceramics</li>
              <li className="hover:underline decoration-[#2A254B]">Tables</li>
              <li className="hover:underline decoration-[#2A254B]">Chairs</li>
              <li className="hover:underline decoration-[#2A254B]">Crockery</li>
              <li className="hover:underline decoration-[#2A254B]">Tableware</li>
              <li className="hover:underline decoration-[#2A254B]">Cutlery</li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
