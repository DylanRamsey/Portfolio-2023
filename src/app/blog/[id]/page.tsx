import { getPostById } from "@/app/utils/utils";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
interface BlogPostProps {
  params: { id: string };
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = getPostById(params.id);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
    },
  };
}

export default function BlogPost({ params }: BlogPostProps) {
  const post = getPostById(params.id);

  if (!post) {
    notFound();
  }

  return (
    <>
      <main className="container mx-auto px-2.5 md:px-0">
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
            className="w-full h-60 object-cover mb-6 border border-white"
          />
        )}

        <article className="mb-6 p-8 md:p-10 bg-white text-black markdownContent">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>

        <div className="border border-white p-4 mb-4">
          <p>This blog post was written 100% by a human 🙂</p>
          <p>
            Dylan Ramsey is a Software Developer living in Sarasota, Florida
            with his family and dogs.
          </p>
        </div>
      </main>
    </>
  );
}
