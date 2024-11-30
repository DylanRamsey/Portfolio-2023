//@ts-nocheck
import Link from "next/link";
import { getAllPosts } from "../utils/utils";
import Image from "next/image";

interface BlogPostProps {
  params: { id: string };
}

export default function Blog({ params }: BlogPostProps) {
  const posts = getAllPosts();

  return (
    <main className="container mx-auto px-6 xl:px-0 mb-20">
      <div className="mb-8">
        <h1 className="text-3xl lg:text-6xl mb-2">My Blog</h1>
        <h2 className="text-3xl lg:text-4xl font-extralight mb-8">
          What I've been thinking about lately...
        </h2>
      </div>

      <ul>
        {posts.map((post) => (
          <li className="mb-16" key={post.id}>
            <Link href={`/blog/${post.id}`}>
              <div className="mb-8">
                <h3 className="lg:text-4xl mb-2">{post.title}</h3>
                <h4 className="lg:text-xl mb-2 font-extralight">
                  {post.description}
                </h4>
                <h4 className="font-extralight">
                  {post.author} | {post.date}
                </h4>
              </div>
              {post.image && (
                <img
                  src={post.image}
                  alt={`Image for ${post.title}`}
                  className="w-full h-60 object-cover"
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
