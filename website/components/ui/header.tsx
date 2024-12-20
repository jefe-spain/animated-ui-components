'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  return (
    <motion.header
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="absolute top-4 md:top-6 w-full z-30 pb-4 md:pb-6 border-b [border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.4),transparent)1] dark:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.16),transparent)1] shadow-[0_1px_0_0_theme(colors.white/.2)] dark:shadow-none"
    >
      <div className="px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="relative flex items-center h-12 bg-gradient-to-b from-white/90 to-white/70 dark:from-gray-700/80 dark:to-gray-700/70 rounded-lg px-3 shadow">
            {/* Site branding */}
            <div className="absolute left-3">
              {/* Logo */}
              <Link href="/">
                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32}>
                  <circle cx="16" cy="16" r="8" className="fill-white" />
                  <path
                    d="M16 3 a13 13 0 0 1 13 13h-3a10 10 0 0 0 -10 -10V3"
                    className="fill-indigo-600"
                  />
                  <path
                    d="M3 16 a13 13 0 0 1 13 -13v3a10 10 0 0 0 -10 10H3"
                    className="fill-indigo-600"
                  />
                  <path
                    d="M16 29 a13 13 0 0 1 -13 -13h3a10 10 0 0 0 10 10v3"
                    className="fill-indigo-600"
                  />
                  <path
                    d="M29 16 a13 13 0 0 1 -13 13v-3a10 10 0 0 0 10 -10h3"
                    className="fill-indigo-600"
                  />
                </svg>
              </Link>
            </div>
            {/* Navigation links */}
           <nav className="flex-1">
              <ul className="flex items-center justify-center sm:gap-x-3 text-sm font-medium">
                <li>
                  <Link
                    className={`text-gray-800 hover:text-indigo-600 hover:font-bold dark:text-gray-200 rounded-lg py-1.5 px-3 ${
                      pathname === '/updates' 
                        ? 'bg-indigo-100 font-bold text-indigo-600'
                        : 'hover:bg-indigo-100 '
                    }`}
                    href="/updates"
                  >
                    Updates
                  </Link>
                </li>
                <li>
                  <Link
                    className={`text-gray-800 hover:text-indigo-600 hover:font-bold dark:text-gray-200 rounded-lg py-1.5 px-3 ${
                      pathname === '/components' 
                        ? 'bg-indigo-100 font-bold text-indigo-600'
                        : 'hover:bg-indigo-100 '
                    }`}
                    href="/components"
                  >
                    Components
                  </Link>
                </li>
                <li>
                  <Link
                    className={`text-gray-800 hover:text-indigo-600 hover:font-bold dark:text-gray-200 rounded-lg py-1.5 px-3 ${
                      pathname === '/faq'
                      ? 'bg-indigo-100 font-bold text-indigo-600'
                      : 'hover:bg-indigo-100'
                    }`}
                    href="/faq"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    className={`text-gray-800 hover:text-indigo-600 hover:font-bold dark:text-gray-200 rounded-lg py-1.5 px-3 ${
                      pathname === '/contact'
                        ? 'bg-indigo-100 font-bold text-indigo-600'
                        : 'hover:bg-indigo-100'
                    }`}
                    href="/contact"
                  > 
                    Contact us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
