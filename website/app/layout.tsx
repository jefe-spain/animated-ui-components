import "./css/style.css";

import { Inter, Inter_Tight } from "next/font/google";
import type { Viewport } from 'next'
 



const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const inter_tight = Inter_Tight({
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'Animated UI Components - React + Rive Animations',
  description: 'Production-ready React components with built-in Rive animations. Drop-in solutions that make adding stunning animations to your React applications effortless.',
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Animated UI Components - React + Rive Made Easy',
    description: 'Drop-in React components with stunning Rive animations',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Animated UI Components with Rive Animations'
      }
    ]
  },
  keywords: ['React components', 'Rive animations', 'UI components', 'React animation', 'interactive UI', 'TypeScript'],
  authors: [
    { name: 'Jesus Fernandez' },
    { name: 'Daniel Fernandez' }
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* suppressHydrationWarning: https://github.com/vercel/next.js/issues/44343 */}
      <body
        className={`${inter.variable} ${inter_tight.variable} font-inter antialiased bg-indigo-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 tracking-tight`}
      >
          <div className="relative flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
            {children}
          </div>
      </body>
    </html>
  );
}
