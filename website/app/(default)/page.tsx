'use client'

import { motion } from "framer-motion";
import PageHeader from "@/components/page-header";
import SubscribeForm from "@/components/subscribe-form";


// Move the client component to a separate component
const HomeContent = () => {
  return (
    <section>
      <div className="pt-32 pb-12 md:pt-44 md:pb-20">
        <div className="px-4 sm:px-6">
          <PageHeader
            className="mb-12"
            title="Beautiful Rive animations for your React apps"
            description="Drop-in animated components powered by Rive. Interactive, lightweight, and runs smoothly on any device. Ship production-ready animations without writing a single keyframe."
          >
            <span className="inline-flex items-center whitespace-nowrap text-sm">
              Beta launching soon! 🚀
              <span className="mx-2 text-[16px] text-gray-800">·</span>
              Get early access ✨
            </span>
          </PageHeader>
          <div className="relative flex items-center justify-center gap-10 before:h-px before:w-full before:border-b before:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.8),transparent)1] dark:before:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.16),transparent)1] before:shadow-sm before:shadow-white/20 dark:before:shadow-none after:h-px after:w-full after:border-b after:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.8),transparent)1] dark:after:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.16),transparent)1] after:shadow-sm after:shadow-white/20 dark:after:shadow-none mb-11">
            <div className="relative min-w-[600px] max-w-[640px] bg-[#1E1E1E] rounded-lg overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between h-8 bg-[#323233] px-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57] flex items-center justify-center">
                    <span className="text-[8px] text-[#4A0002]">✕</span>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-[#FEBC2E] flex items-center justify-center">
                    <span className="text-[8px] text-[#9A6209]">−</span>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-[#28C840] flex items-center justify-center">
                    <span className="text-[8px] text-[#0B5614]">□</span>
                  </div>
                </div>
                <button 
                  className="text-gray-400 hover:text-gray-200 transition-colors"
                  onClick={() => navigator.clipboard.writeText('pnpm add @animated-ui-components')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                </button>
              </div>
              <div className="p-2 font-mono text-sm">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.span className="text-[#4EC9B0]" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>~</motion.span>
                  <motion.span 
                    className="text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  > % pnpm install @animated-ui-components</motion.span>
                  
                  <motion.div 
                    className="mt-1 text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >added 42 packages in 120ms</motion.div>
                  <motion.div
                    className="mt-1 text-gray-400 flex items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                  >
                    <span>Installing dependencies</span>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1,
                        repeat: 2,
                        repeatType: "loop"
                      }}
                    >...</motion.span>
                    <motion.div 
                      id="progressbar"
                      className="h-[2px] w-32 bg-gray-700 overflow-hidden rounded-full"
                    >
                      <motion.div
                        className=" h-full bg-gray-400"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{
                          repeat: 2,
                          duration: 1,
                          ease: "linear",
                        }}
                        onAnimationComplete={() => {
                          console.log('animation completed');
                          const el = document.getElementById('progressbar');
                          el?.remove();
                        }}
                      />
                    </motion.div>
                  </motion.div>
                  <motion.div
                    className="text-green-400"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3, type: "spring" }}
                  >✨ Successfully installed animated-ui-components</motion.div>
                </motion.div>
              </div>
            </div>
          </div>
          
          <SubscribeForm />
        </div>
      </div>
    </section>
  );
}

// Main page component becomes server component
export default function Home() {
  return <HomeContent />;
}
