"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme } = useTheme();
  
  return (
    <header
      className={`bg-background border-b ${
        theme === "light"
          ? "border-gray-50 shadow"
          : "border-gray-800 shadow-xl"
      }`}
    >
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <div>
          <Link href={"/"}>
            <h1 className='text-2xl font-bold'>B-2.0</h1>
          </Link>
        </div>
        <nav>
          <ul className='flex items-center space-x-3 lg:space-x-8'>
            <li>
              <Link href='/' className='text-foreground hover:text-blue-600'>
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/about'
                className='text-foreground hover:text-blue-600'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href='/contact'
                className='text-foreground hover:text-blue-600'
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        
        {/* Theme (dark / light) */}
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
