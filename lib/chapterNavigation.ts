import { parts } from "./partsData";

export function getChapterNavigation(slug: string) {
  const currentIndex = parts.findIndex(
    (part) => part.slug === slug
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
        ? parts[currentIndex - 1]
        : null,

    next:
      currentIndex < parts.length - 1
        ? parts[currentIndex + 1]
        : null,
  };
}