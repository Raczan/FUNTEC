import type { Metadata } from 'next';
import { Open_Sans as FontSans } from 'next/font/google';

import './globals.css';

// Configuration font object
const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Litigade',
  description: 'FUNTEC Technical Test',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontSans.className}>{children}</body>
    </html>
  );
}
