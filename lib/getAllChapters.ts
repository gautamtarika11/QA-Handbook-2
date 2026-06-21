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
  const files = fs
    .readdirSync(contentDirectory)
    .filter((file) => file.endsWith(".md"));

  const chapters = files
    .map((file): Chapter | null => {
      const fullPath = path.join(contentDirectory, file);

      const fileContents = fs.readFileSync(fullPath, "utf8");

      const { data } = matter(fileContents);

      // Skip invalid markdown files
      if (!data.title || !data.chapter || !data.slug) {
        console.warn(
          `Skipping invalid chapter file: ${file}`
        );
        return null;
      }

      return {
        title: String(data.title),
        chapter: Number(data.chapter),
        slug: String(data.slug),
      };
    })
    .filter((chapter): chapter is Chapter => chapter !== null);

  return chapters.sort((a, b) => a.chapter - b.chapter);
}