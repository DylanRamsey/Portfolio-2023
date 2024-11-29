import { getPostById } from "@/app/utils/utils";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

interface BlogPostProps {
  params: { id: string };
}

export default function BlogPost({ params }: BlogPostProps) {
  const post = getPostById(params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto">
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  );
}
