"use client";

import { Limelight } from 'next/font/google';
const limelight = Limelight({ weight: '400', subsets: ['latin'] });

const Footer = () => {
    return (
        <footer className="mt-3 p-3">
            <div className="text-center">
                <span className='mr-2'>© 2023</span>
                <span className={`text-xl ${limelight.className}`}>Pass Map</span>. 
                <span className='ml-2'>All rights reserved.</span>
            </div>
        </footer>
    )
}

export default Footer