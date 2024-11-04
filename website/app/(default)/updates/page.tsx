import getAllPosts from "@/lib/getAllPosts";

export const metadata = {
  title: "Updates - Animated UI Components Changelog",
  description: "Stay up to date with the latest features, improvements, and releases of our React animation components. Follow our journey building the best Rive-powered UI library.",
  keywords: "React components updates, Rive animations changelog, UI components news",
  openGraph: {
    title: "Latest Updates - Animated UI Components",
    description: "Follow our progress building React + Rive components"
  }
};

import PageHeader from "@/components/page-header";
import Cta from "@/components/cta";
import Posts from "@/app/(default)/updates/posts";

export default async function Updates() {
  const postsData: Promise<Post[]> = getAllPosts();
  const posts = await postsData;

  return (
    <>
      <section>
        <div className="pt-32 pb-12 md:pt-44 md:pb-20">
          <div className="px-4 sm:px-6">
            <PageHeader
              title="Latest Updates"
              description="Follow our journey building awesome React animations. See what's cooking and what's coming next! 🚀"
            >
              What's New
            </PageHeader>
          </div>
        </div>
      </section>

      <Posts posts={posts} />
      <Cta />
    </>
  );
}
