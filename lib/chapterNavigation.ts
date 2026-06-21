import { getAllChapters } from "./getAllChapters";

export function getChapterNavigation(slug: string) {
  const chapters = getAllChapters();

  const currentIndex = chapters.findIndex(
    (chapter) => chapter.slug === slug
  );

  if (currentIndex === -1) {
    return {
      previous: null,
      next: null,
    };
  }

  return {
    previous:
      currentIndex > 0
        ? chapters[currentIndex - 1]
        : null,

    next:
      currentIndex < chapters.length - 1
        ? chapters[currentIndex + 1]
        : null,
  };
}