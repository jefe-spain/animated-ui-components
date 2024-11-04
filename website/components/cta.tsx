import SubscribeForm from "@/components/subscribe-form";

export default function Cta() {
  return (
    <section>
      <div className="pb-12 md:pb-20">
        <div className="px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="pt-12 md:pt-20 text-center border-t [border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.72),transparent)1] dark:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.16),transparent)1] shadow-[inset_0_1px_0_0_theme(colors.white/.2)] dark:shadow-none mb-12">
              <h2 className="font-inter-tight text-4xl md:text-5xl font-bold text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-indigo-200 dark:to-gray-200 pb-4">
                Get early access to Rive components
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-400">
                Be the first to know when we launch and get exclusive beta access
              </p>
            </div>
          </div>

          <SubscribeForm />
        </div>
      </div>
    </section>
  );
}
