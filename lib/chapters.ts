import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export function getChapterBySlug(slug: string) {
  const files = fs.readdirSync(contentDirectory);

  const file = files.find((file) => {
    const fileContent = fs.readFileSync(
      path.join(contentDirectory, file),
      "utf8"
    );

    const { data } = matter(fileContent);
    console.log("File:", file);
    console.log("Slug in file:", data.slug);
    console.log("Looking for:", slug);


    return data.slug === slug;
  });

  if (!file) return null;

  const fullPath = path.join(contentDirectory, file);

  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    frontmatter: data,
    content,
  };
}