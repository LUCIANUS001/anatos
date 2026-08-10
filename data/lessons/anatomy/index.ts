import { humerusLesson } from "./humerus";

export const anatomyLessons = {
  humerus: humerusLesson,
};

export type AnatomyLessonClug = keyof typeof anatomyLessons;
