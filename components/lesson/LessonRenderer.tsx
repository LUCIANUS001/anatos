import LessonSection from "./LessonSection";
import VivaAccordion from "./VivaAccordion";
import VivaQuestions from "./VivaQuestions";
import VivaRevision from "./VivaRevision";
import MCQRevision from "./MCQRevision";
import FlashcardRevision from "./FlashcardRevision";

interface LessonRendererProps {
  lesson: any;
}

export default function LessonRenderer({ lesson }: LessonRendererProps) {
  const sections = [
    {
      id: "learning-objectives",
      title: "Learning Objectives",
      content: lesson.objectives?.join("\n• "),
    },

    {
      id: "definition",
      title: "Definition",
      content: lesson.definition,
    },

    {
      id: "introduction",
      title: "Introduction",
      content: lesson.introduction,
    },

    {
      id: "anatomical-position",
      title: "Anatomical Position",
      content: lesson.anatomicalPosition,
    },

    {
      id: "side-determination",
      title: "Side Determination",
      content: lesson.sideDetermination,
    },

    {
      id: "features",
      title: "Features",
      content: lesson.features,
    },

    {
      id: "relations",
      title: "Relations",
      content: lesson.relations,
    },

    {
      id: "surface-anatomy",
      title: "Surface Anatomy",
      content: lesson.surfaceAnatomy,
    },

    {
      id: "blood-supply",
      title: "Blood Supply",
      content: "",
      items: lesson.bloodSupply,
      icon: "🩸",
    },

    {
      id: "nerve-supply",
      title: "Nerve Supply",
      content: "",
      items: lesson.nerves,
      icon: "🧠",
    },

    {
      id: "muscle-attachments",
      title: "Muscle Attachments",
      content: "",
      items: lesson.muscles,
      icon: "💪",
    },

    {
      id: "ossification",
      title: "Ossification",
      content: lesson.ossification,
    },

    {
      id: "development",
      title: "Development",
      content: lesson.development,
    },

    {
      id: "variations",
      title: "Variations",
      content: lesson.variations,
    },

    {
      id: "clinical-correlation",
      title: "Clinical Correlation",
      content: "",
      items: lesson.clinical,
      icon: "🩺",
    },

    {
      id: "radiological-anatomy",
      title: "Radiological Anatomy",
      content: lesson.radiologicalAnatomy,
    },

    {
      id: "practical-anatomy",
      title: "Practical Anatomy",
      content: "",
      items: lesson.practical,
      icon: "🧪",
    },

    {
      id: "anatomy-atlas",
      title: "Anatomy Atlas",
      content: "",
      images: lesson.images,
    },

    {
      id: "viva-questions",
      title: "Viva Questions",
      content: "",
      component: lesson.viva?.length ? (
        <VivaRevision items={lesson.viva} />
      ) : null,
    },

    {
      id: "mcqs",
      title: "MCQs",
      content: "",
      component: lesson.mcqs?.length ? (
        <MCQRevision items={lesson.mcqs} />
      ) : null,
    },

    {
      id: "flashcards",
      title: "Flashcards",
      content: "",
      component: lesson.flashcards?.length ? (
        <FlashcardRevision lessonId={lesson.slug} items={lesson.flashcards} />
      ) : null,
    },

    {
      id: "summary",
      title: "Summary",
      content: lesson.summary,
    },
  ];

  return (
    <div className="space-y-14">
      {sections
        .filter(
          (section) =>
            section.content ||
            section.component ||
            (section.images && section.images.length > 0) ||
            (section.items && section.items.length > 0),
        )
        .map((section) => (
          <LessonSection
            key={section.id}
            id={section.id}
            title={section.title}
            content={section.content}
            images={section.images}
            items={section.items}
            icon={section.icon}
            component={section.component}
          />
        ))}

      {lesson.viva?.length > 0 && (
        <section
          id="viva-questions"
          className="scroll-mt-28 border-b border-slate-200 pb-14 mb-14"
        >
          <h2 className="mb-6 text-3xl font-bold text-slate-900">
            Viva Questions
          </h2>

          <VivaAccordion questions={lesson.viva} />
        </section>
      )}
    </div>
  );
}
