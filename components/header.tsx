"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeButton from './themeButton';
import MobileSidebar from './mobileSidebar';
import headerNavLinks from '@/data/headerNavLinks.json';
import { Limelight } from 'next/font/google';
const limelight = Limelight({ weight: '400', subsets: ['latin'] });
const BORDER_POSITION = 50;

const Header = () => {
  const DEFAULT_POSITION = typeof window !== 'undefined' ? window.pageYOffset : 0;
  const [scrollPosition, setScrollPosition] = useState(DEFAULT_POSITION);

  useEffect(() => {
    setScrollPosition(window.pageYOffset);
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", updatePosition);
  }, []);

  const headerLayout = (position: number): string => {
    let style = 'border-solid border-b border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-900';
    return position < BORDER_POSITION ? '' : style;
  }

  return (
    <header className={`flex items-center justify-between py-3 px-5 md:px-8 fixed w-full z-10 ${headerLayout(scrollPosition)}`}>
      <div className='navbar-logo'>
        <Link href='/' aria-label='Pass Map'>
          <div className='flex items-center justify-between'>
            <div className='mr-3'>
              <Image
                src="/icon.png"
                alt="Pass Map Logo"
                width={40}
                height={40}
                priority
              />
            </div>
            <div className={`h-6 text-xl sm:text-2xl ${limelight.className}`}>Pass Map</div>
          </div>
        </Link>
      </div>
      <div className='navbar-menu flex items-center text-base leading-5'>
        <div className='hidden sm:block'>
          { headerNavLinks.map((link) => (
            <Link href={link.href} key={link.title}
              className="px-1 font-medium sm:px-3">
              {link.title}
            </Link>
          ))}
        </div>
        <ThemeButton />
        <MobileSidebar />
      </div>
    </header>
  )
}

export default Header