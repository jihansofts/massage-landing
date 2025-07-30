"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Packages", id: "packages" },
    { name: "About Us", id: "about" },
    { name: "FAQ", id: "faq" },
    { name: "Providers", id: "providers" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false); // close mobile menu after click
  };

  return (
    <nav className="w-full px-4 py-4 bg-transparent flex justify-center">
      <div className="w-full container bg-white rounded-full flex items-center justify-between px-10 py-6 shadow-md">
        {/* Logo */}
        <div className="text-[24px] font-helvetica font-semibold text-[#00192D]">
          Eve’s Fountain
        </div>

        {/* Desktop Menu */}
        <div className="flex items-center space-x-8">
          <ul className="hidden md:flex items-center gap-8 text-[#00192D] font-medium">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="hover:text-[#D99D84] text-[16px] font-helvetica font-semibold transition">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Contact Button */}
          <div className="hidden md:block">
            <a
              href="tel:+1(424)358-7799"
              className="bg-[#F3EAE7]  text-[#0A1F2C] font-helvetica text-[14px] font-semibold px-10 py-4 rounded-full hover:bg-[#ebdcd9] transition">
              Contact Us
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#0A1F2C] relative z-50"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-25 left-4 right-4 bg-white rounded-xl shadow-lg p-4 z-40">
          <ul className="flex flex-col gap-4 text-[#0A1F2C] font-medium">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={handleLinkClick}
                  className="block hover:text-[#D99D84] text-[16px] font-medium">
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="tel:+1(424)358-7799"
                onClick={handleLinkClick}
                className="bg-[#F3EAE7] text-[#0A1F2C] font-semibold px-4 py-2 rounded-full inline-block text-center">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
