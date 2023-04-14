"use client";

import './globals.css'
import Head from "next/head";
import Header from '@/components/header';
import Footer from '@/components/footer';
import { ThemeProvider } from "next-themes";
import { Poppins } from 'next/font/google';
const inter = Poppins({ weight: ['400', '700'], subsets: ['latin'] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta charSet="utf-8"/>
            </Head>
            <ThemeProvider attribute='class'>
                <body className={inter.className}>
                    <Header />
                    <main className='mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0'>{children}</main>
                    <Footer />
                </body>
            </ThemeProvider>
        </html>
    )
}
