import type { Lesson } from "@/types/lesson";

/**
 * Master Lesson Loader
 *
 * Every lesson in AnatOS passes through this loader.
 *
 * Future:
 * - Local content
 * - Database
 * - CMS
 * - AI-generated lessons
 * - API
 *
 * Nothing else should load lessons directly.
 */

export async function loadLesson(
  loader: () => Promise<{ default: Lesson }>,
): Promise<Lesson> {
  const lesson = await loader();

  return lesson.default;
}
