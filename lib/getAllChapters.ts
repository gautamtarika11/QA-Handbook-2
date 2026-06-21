import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Chapter {
  title: string;
  chapter: number;
  slug: string;
}

const contentDirectory = path.join(process.cwd(), "content");

export function getAllChapters(): Chapter[] {
  const files = fs.readdirSync(contentDirectory);

  const chapters: Chapter[] = files.map((file) => {
    const fullPath = path.join(contentDirectory, file);

    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data } = matter(fileContents);

    return {
      title: String(data.title),
      chapter: Number(data.chapter),
      slug: String(data.slug),
    };
  });

  return chapters.sort((a, b) => a.chapter - b.chapter);
}