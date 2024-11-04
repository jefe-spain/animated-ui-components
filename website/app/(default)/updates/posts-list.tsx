"use client";

import ReactMarkdown from "react-markdown";

export default function PostsList({
  posts,
  selectedCategory,
}: {
  posts: Post[];
  selectedCategory: string;
}) {
  const filteredPosts = posts.filter(
    (post) => post.category === selectedCategory
  );

  return (
    <div className="md:grow -my-5 space-y-4">
      {filteredPosts.map((post) => {
        return (
          <article
            key={post.id}
            className="relative pl-12 pr-4 sm:pl-28 py-5 group before:absolute before:left-8 sm:before:left-24 before:right-0 before:inset-y-0 before:bg-gradient-to-tr before:from-white/70 before:to-white/50 before:dark:bg-gradient-to-b before:dark:from-gray-700/50 before:dark:to-gray-700/40 before:rounded-lg before:shadow before:shadow-black/5 before:-z-10 even:before:opacity-50"
          >
            <header className="flex flex-col sm:flex-row items-start mb-2 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-[calc(100%+1rem)] before:pl-px before:bg-indigo-300/50 dark:before:bg-indigo-300/15 sm:before:ml-[4.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-400 after:rounded-full sm:after:ml-[4.5rem] after:-translate-x-1/2 after:translate-y-2">
              <time className="sm:absolute -left-4 inline-flex items-center justify-center text-xs font-medium w-20 h-6 mb-3 sm:mb-0 text-white bg-blue-600 rounded-lg">
                {post.date}
              </time>
              <h2 className="font-inter-tight text-lg leading-6 font-semibold text-gray-800 dark:text-gray-200">
                {post.title}
              </h2>
            </header>
            <div className="mb-4 prose prose-indigo dark:prose-invert prose-sm sm:prose-base max-w-none">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
            <div className="h-px w-full bg-gray-300 dark:bg-gray-700 mb-4" />
            <footer className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  className="shrink-0 rounded-full"
                  src={post.authorImage}
                  width={32}
                  height={32}
                  alt={post.author}
                />
                <div className="text-sm font-normal text-gray-800 dark:text-gray-200">
                  {post.author}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <a
                  href={post.socials.x}
                  className="text-gray-400 hover:text-gray-600 flex items-center justify-center w-6 h-6"
                >
                  <span className="sr-only">X (Twitter)</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                    <path d="M14.2833 7.11423L18.6667 2H17.3333L13.5667 6.42707L10.5667 2H6L10.6667 8.74874L6 14.1485H7.33333L11.3833 9.43589L14.6333 14.1485H19.3333L14.2833 7.11423ZM12.0667 8.83472L11.4333 7.94069L7.83333 2.96684H9.8L12.6 7.00826L13.2333 7.90229L17.0667 13.1817H15.1L12.0667 8.83472Z" />
                  </svg>
                </a>
                <a
                  href={post.socials.github}
                  className="text-gray-400 hover:text-gray-600 flex items-center justify-center w-6 h-6"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 25 25"
                  >
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
              </div>
            </footer>
          </article>
        );
      })}
    </div>
  );
}
