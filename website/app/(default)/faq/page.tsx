export const metadata = {
  title: "FAQ - Animated UI Components | Common Questions",
  description: "Find answers about our Rive-powered React components. Learn about installation, usage, customization, framework compatibility, and more.",
  keywords: "React components FAQ, Rive animations help, UI components documentation, React animation guide",
  openGraph: {
    title: "FAQ - Animated UI Components",
    description: "Everything you need to know about our React + Rive components",
    type: "website",
  }
};

import PageHeader from "@/components/page-header";
import Accordion from "@/components/accordion";
import Cta from "@/components/cta";

export default function Faq() {
  const faqs = [
    {
      title: "When will the components be available?",
      text: "We're currently in beta development, aiming to launch in Q1 2025. Join our waitlist to get early access and be the first to know when we release!",
      active: true,
    },
    {
      title: "What makes these components different?",
      text: "Our components are powered by Rive animations, making them lightweight, interactive, and smooth on any device. They're designed to drop right into your React projects with minimal configuration.",
      active: false,
    },
    {
      title: "Do I need Rive knowledge to use them?",
      text: "Not at all! Our components work out of the box - no animation expertise needed. We handle all the Rive integration so you can focus on building your app.",
      active: false,
    },
    {
      title: "Will they work with my React setup?",
      text: "Yes! Our components are compatible with modern React (16.8+) and work seamlessly with Next.js, Create React App, Vite, and other popular React frameworks.",
      active: false,
    },
    {
      title: "Do you support Angular, Vue, or other frameworks?",
      text: "Currently, we're focused on delivering the best experience for React developers. Support for other frameworks like Angular and Vue is on our roadmap, but we don't have a specific timeline yet.",
      active: false,
    }
  ];

  return (
    <>
      <section>
        <div className="pt-32 pb-12 md:pt-44 md:pb-20">
          <div className="px-4 sm:px-6">
            <PageHeader
              className="mb-12 md:mb-20"
              title="Frequently Asked Questions"
              description="Everything you need to know about our animated React components. Can't find your answer? Feel free to contact us."
            >
              Quick Answers
            </PageHeader>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-1">
                    <Accordion
                      title={faq.title}
                      id={`faqs-${index}`}
                      active={faq.active}
                    >
                      <div className="text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300 p-2">
                        {faq.text}
                      </div>
                    </Accordion>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
