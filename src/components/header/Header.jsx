import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <header className='bg-background border-b'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <nav>
          <ul className='flex space-x-4'>
            <li>
              <Link href='/' className='text-foreground hover:text-primary'>
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/about'
                className='text-foreground hover:text-primary'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href='/contact'
                className='text-foreground hover:text-primary'
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
