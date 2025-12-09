"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm">
      <nav className="h-20">
        <div className="w-full h-full flex justify-around items-center px-4">
          <div className="text-white text-2xl md:text-3xl font-bold">
            <span className="text-[#5784BA] drop-shadow-[0_0_10px_#5784BA]">
              Alexandre MIONE
            </span>
          </div>

          <div className="hidden md:flex gap-8">
            <Link
              href="#about"
              className="text-white text-lg font-medium hover:text-[#5784BA] transition-colors relative group"
            >
              A propos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5784BA] transition-all group-hover:w-full" />
            </Link>
            <Link
              href="#skills"
              className="text-white text-lg font-medium hover:text-[#5784BA] transition-colors relative group"
            >
              Compétences
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5784BA] transition-all group-hover:w-full" />
            </Link>
            <Link
              href="#projects"
              className="text-white text-lg font-medium hover:text-[#5784BA] transition-colors relative group"
            >
              Projets
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5784BA] transition-all group-hover:w-full" />
            </Link>
            <Link
              href="#contact"
              className="text-white text-lg font-medium hover:text-[#5784BA] transition-colors relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5784BA] transition-all group-hover:w-full" />
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-3xl"
            aria-label="Menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile */}
        <div
          className={`md:hidden absolute top-20 left-0 w-full bg-black/95 backdrop-blur-sm transition-all duration-300 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col items-center gap-6 py-8">
            <Link
              href="#about"
              onClick={() => setIsOpen(false)}
              className="text-white text-lg font-medium hover:text-[#5784BA] transition-colors"
            >
              A propos
            </Link>
            <Link
              href="#skills"
              onClick={() => setIsOpen(false)}
              className="text-white text-lg font-medium hover:text-[#5784BA] transition-colors"
            >
              Compétences
            </Link>
            <Link
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="text-white text-lg font-medium hover:text-[#5784BA] transition-colors"
            >
              Projets
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-white text-lg font-medium hover:text-[#5784BA] transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
