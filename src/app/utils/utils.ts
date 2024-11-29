import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  description?: string;
  content: string;
  author: string;
  image?: string;
}


const postsDirectory = path.join(process.cwd(), 'posts');

export function getAllPosts(): Omit<BlogPost, 'content'>[] {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames
    .filter((fileName) => {
      const fullPath = path.join(postsDirectory, fileName);
      return fs.statSync(fullPath).isFile(); // Ensure it's a file
    })
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      const { data } = matter(fileContents);

      return {
        id,
        ...data,
      } as Omit<BlogPost, 'content'>;
    });
}
export function getPostById(id: string): BlogPost | null {
  const fullPath = path.join(postsDirectory, `${id}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    id,
    content,
    ...data,
  } as BlogPost;
}