export function buildLessonContext(
  lessonId: string,
  lessonTitle: string,
  section?: string,
  hotspot?: string
) {
  return {
    lessonId,
    lessonTitle,
    currentSection: section,
    hotspotId: hotspot,
  };
}