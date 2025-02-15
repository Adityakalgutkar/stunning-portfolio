// components/Header.js
'use client'; // Required for client-side interactivity

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useState } from "react";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const pathname = usePathname();

  return (
    <header className=" text-black p-4 container mt-8">
      <nav className='mx-8 lg:mx-40 text-right'>

         {/* Hamburger Menu Icon (Mobile) */}
         <button
          onClick={toggleMenu}
          className="text-black focus:outline-none lg:hidden "
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

      
        <ul className="flex justify-between space-x-7 text-xl font-medium relative">
          <li className='flex items-center gap-2 hidden lg:flex position-relative' >

          <Image
          alt="Aditya Kalgutkar"
          src="/email.svg"
          width={40}
          height={40}
          ></Image>
            <Link href="/" className="hover:text-gray-300 transition-colors {pathname === '/' ? 'border-b-2 border-yellow-400 flex' : 'flex'} text-xl font-medium">
              kalgutkar789@gmail.com
            </Link>
          </li>
          <li  className={`${
            isOpen ? "flex" : "hidden"
          } lg:flex lg:items-center w-full flex-col lg:flex-row lg:w-auto lg:gap-4 absolute lg:relative gap-6 pr-4 pt-4 transition-all`}
          >
            <div className={pathname === '/about' ? 'border-b-2 border-yellow-400' : ''}>
            
            <Link href="/about" className="hover:text-gray-300 transition-colors">
              About
            </Link>
            </div>

            <div className={pathname === '/services' ? 'border-b-2 border-yellow-400' : ''}>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">
              Services
            </Link>
          </div>
            <div className={pathname === '/portfolio' ? 'border-b-2 border-yellow-400' : ''}>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">
              Portfolio
            </Link>
          </div>
            <div className={pathname === '/contact' ? 'border-b-2 border-yellow-400' : ''}>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </div>
          </li>
 
        </ul>
      </nav>
    </header>
  );
};

export default Header;