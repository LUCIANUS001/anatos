import CourseCard from "./CourseCard";

const courses = [
  {
    title: "Foundations of Anatomy",
    description:
      "Introduction to anatomical terminology, body planes, cavities, movements and basic concepts.",
    lessons: 24,
  },
  {
    title: "Gross Anatomy",
    description:
      "Study the major structures of the human body through regional and systemic anatomy.",
    lessons: 72,
  },
  {
    title: "Histology",
    description:
      "Learn microscopic anatomy, tissues, organs and slide interpretation.",
    lessons: 36,
  },
  {
    title: "Embryology",
    description:
      "Understand human development from fertilisation to birth.",
    lessons: 28,
  },
  {
    title: "Neuroanatomy",
    description:
      "Master the anatomy of the brain, spinal cord and nervous system.",
    lessons: 42,
  },
  {
    title: "Practical Anatomy",
    description:
      "Prepare for OSPE, spotters, specimen identification and practical examinations.",
    lessons: 55,
  },
];

export default function CourseGrid() {
  return (
    <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <CourseCard
          key={course.title}
          title={course.title}
          description={course.description}
          lessons={course.lessons}
        />
      ))}
    </section>
  );
}