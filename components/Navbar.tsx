'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fde8e5]/80 backdrop-blur-md border-b border-[#ec1a82]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex h-16 items-center" aria-label="Kosmia inicio">
              <Image
                src="/kosmia_logo_letras_transparente.png"
                alt="Kosmia"
                width={176}
                height={60}
                priority
                className="h-10 w-auto object-contain sm:h-11"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/mi-historia"
                className="text-[#2b1020] hover:text-[#ec1a82] transition-colors duration-200 font-medium"
              >
                Mi historia
              </Link>
              <Link
                href="/servicios"
                className="text-[#2b1020] hover:text-[#ec1a82] transition-colors duration-200 font-medium"
              >
                Servicios
              </Link>
              <Link
                href="/#contactame"
                className="text-[#2b1020] hover:text-[#ec1a82] transition-colors duration-200 font-medium"
              >
                Contactame
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#2b1020] hover:text-[#ec1a82] p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#fde8e5]/95 backdrop-blur-md rounded-b-lg">
              <Link
                href="/mi-historia"
                className="block px-3 py-2 text-[#2b1020] hover:text-[#ec1a82] transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Mi historia
              </Link>
              <Link
                href="/servicios"
                className="block px-3 py-2 text-[#2b1020] hover:text-[#ec1a82] transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="/#contactame"
                className="block px-3 py-2 text-[#2b1020] hover:text-[#ec1a82] transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contactame
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
