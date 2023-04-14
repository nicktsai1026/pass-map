"use client";

import Link from 'next/link';
import Image from 'next/image';
import ThemeButton from './themeButton';
import MobileSidebar from './mobileSidebar';
import headerNavLinks from '@/data/headerNavLinks.json';
import { Limelight } from 'next/font/google';
const limelight = Limelight({ weight: '400', subsets: ['latin'] });

const Header = () => {
    return (
        <header className='flex items-center justify-between py-4 px-8'>
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
            <div className='navbar-links flex items-center text-base leading-5'>
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