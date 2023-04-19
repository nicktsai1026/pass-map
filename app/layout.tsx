"use client";

import './globals.css'
import Provider from '@/components/provider';
import { Poppins } from 'next/font/google';
const inter = Poppins({ weight: ['400', '700'], subsets: ['latin'] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Provider>{children}</Provider>
            </body>
        </html>
    )
}
