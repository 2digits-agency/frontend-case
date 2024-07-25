import type { Metadata } from 'next';
import { Barlow } from 'next/font/google';

import './globals.css';

import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';

const barlow = Barlow({ subsets: ['latin'], weight: '600' });

export const metadata: Metadata = {
  title: 'Frontend case by Eyup',
  description: 'Task Development',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={barlow.className}>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
