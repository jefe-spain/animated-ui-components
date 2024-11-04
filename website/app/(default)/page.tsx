export const metadata = {
  title: "Animated UI Components - Production-Ready React Components with Rive Animations",
  description: "Transform your React applications with stunning Rive animations. Our drop-in components are lightweight, interactive, and production-ready. Perfect for modern React developers.",
  keywords: "React components, Rive animations, UI components, React animation, interactive UI, TypeScript",
  openGraph: {
    title: "Animated UI Components - React + Rive Made Easy",
    description: "Production-ready React components with built-in Rive animations",
    type: "website",
  }
};

import PageHeader from "@/components/page-header";
import SubscribeForm from "@/components/subscribe-form";

export default function Home() {
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

          <SubscribeForm />
        </div>
      </div>
    </section>
  );
}
