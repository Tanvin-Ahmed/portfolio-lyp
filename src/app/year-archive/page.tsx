import { Separator } from "@/components/ui/separator";
import { Calendar } from "lucide-react";
import Link from "next/link";

const blogPosts = {
  "2024": [
    {
      _id: crypto.randomUUID(),
      title: "Blog Post 03",
      about: "Small description about the blog post",
      publicationDate: "2024-06-21",
      readingTime: "4 min read",
    },
    {
      _id: crypto.randomUUID(),
      title: "Blog Post 02",
      about: "Small description about the blog post",
      publicationDate: "2024-03-01",
      readingTime: "4 min read",
    },
    {
      _id: crypto.randomUUID(),
      title: "Blog Post 01",
      about: "Small description about the blog post",
      publicationDate: "2024-01-02",
      readingTime: "4 min read",
    },
  ],
  "2021": [
    {
      _id: crypto.randomUUID(),
      title: "Blog Post 03",
      about: "Small description about the blog post",
      publicationDate: "2021-08-21",
      readingTime: "4 min read",
    },
    {
      _id: crypto.randomUUID(),
      title: "Blog Post 02",
      about: "Small description about the blog post",
      publicationDate: "2021-06-21",
      readingTime: "4 min read",
    },
    {
      _id: crypto.randomUUID(),
      title: "Blog Post 01",
      about: "Small description about the blog post",
      publicationDate: "2021-02-21",
      readingTime: "4 min read",
    },
  ],
  "2019": [
    {
      _id: crypto.randomUUID(),
      title: "Blog Post 03",
      about: "Small description about the blog post",
      publicationDate: "2019-08-21",
      readingTime: "4 min read",
    },
    {
      _id: crypto.randomUUID(),
      title: "Blog Post 02",
      about: "Small description about the blog post",
      publicationDate: "2019-05-21",
      readingTime: "4 min read",
    },
    {
      _id: crypto.randomUUID(),
      title: "Blog Post 01",
      about: "Small description about the blog post",
      publicationDate: "2019-01-21",
      readingTime: "4 min read",
    },
  ],
};

const BlogPostPage = () => {
  return (
    <section className="container mx-auto p-4">
      <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold">Blog posts</h1>
      <div className="mt-6 space-y-10">
        {Object.entries(blogPosts)
          .reverse()
          .map(([year, posts]) => (
            <div key={year}>
              <h3 className="text-muted-foreground text-xl font-bold">
                {year}
              </h3>
              <Separator className="my-2" />
              <div className="space-y-8">
                {posts.map((post) => (
                  <div key={post._id} className="space-y-1">
                    <h2 className="text-xl sm:text-2xl font-bold text-primary underline">
                      <Link href={`/year-archive/${post._id}`}>
                        {post.title}
                      </Link>
                    </h2>
                    <small className="text-muted-foreground">
                      {post.readingTime}
                    </small>
                    <p className="flex items-center gap-1 font-bold">
                      <Calendar className="w-4 h-4" />
                      <span>Published: {post.publicationDate}</span>
                    </p>
                    <p>{post.about}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default BlogPostPage;
