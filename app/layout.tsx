import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CleanSSR',
  description: 'CleanSSR - blog platform | Premium creative and design platform with reviews and ratings, content management',
  keywords: 'CleanSSR, blog platform, creative and design, reviews and ratings, content management',
  authors: [{ name: 'CleanSSR' }],
  openGraph: {
    title: 'CleanSSR',
    description: 'CleanSSR - blog platform | Premium creative and design platform',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body className="antialiased bg-white text-black">{children}</body>
    </html>
  );
}