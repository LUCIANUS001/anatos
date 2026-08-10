import { notFound } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Breadcrumbs from "@/components/lesson/Breadcrumbs";
import LessonHeader from "@/components/lesson/LessonHeader";
import LessonOutline from "@/components/lesson/LessonOutline";
import LessonObjectives from "@/components/lesson/LessonObjectives";
import LessonContent from "@/components/lesson/LessonContent";
import LessonTracker from "@/components/lesson/LessonTracker";

import BookmarkButton from "@/components/lesson/BookmarkButton";
import LessonNotes from "@/components/lesson/LessonNotes";
import ReadingHistoryTracker from "@/components/lesson/ReadingHistoryTracker";

import ClinicalCorrelation from "@/components/lesson/ClinicalCorrelation";
import AnatomyLandmarks from "@/components/lesson/AnatomyLandmarks";
import MuscleAttachments from "@/components/lesson/MuscleAttachments";
import BloodSupply from "@/components/lesson/BloodSupply";
import NerveSupply from "@/components/lesson/NerveSupply";
import PracticalSection from "@/components/lesson/PracticalSection";
import VivaQuestions from "@/components/lesson/VivaQuestions";
import FlashcardsSection from "@/components/lesson/FlashcardsSection";
import RelatedTopics from "@/components/lesson/RelatedTopics";
import LessonQuiz from "@/components/lesson/quiz/LessonQuiz";
import InfoBox from "@/components/lesson/InfoBox";

import { anatomyLessons } from "@/data/lessons/anatomy";
import AtlasSection from "@/components/atlas/AtlasSection";

import { getLearningUnitBySlug } from "@/data/curriculum";
import { toLegacyLesson } from "@/data/curriculum/adapter";

import AnatOSAI from "@/components/ai/AnatOSAI";
import { buildLessonContext } from "@/components/ai/AIContext";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function LessonPage({ params }: PageProps) {
  const { slug } = await params;

  const registryResult = getLearningUnitBySlug(slug);

  let lesson = registryResult ? toLegacyLesson(registryResult) : anatomyLessons[slug as keyof typeof anatomyLessons];

  if (!lesson) {
    notFound();
  }

  // Normalize commonly used fields for UI components to satisfy strict typings.
  // This keeps changes localized to the page and preserves the original lesson data.
  const objectivesArr: string[] = (lesson.objectives ?? []).map((o: any) => (typeof o === "string" ? o : o.text ?? String(o)));

  // Atlas may be typed as unknown in Lesson — coerce to the atlas types used by AtlasSection.
  // Importing the type inline to avoid broad changes.
  type LessonAtlasType = import("@/components/atlas/types").LessonAtlas;
  const atlas = (lesson.atlas ?? {}) as LessonAtlasType;

  const outline = lesson.outline ?? [];
  const description = lesson.description ?? "";
  const category = lesson.category ?? "";
  const difficulty = lesson.difficulty ?? "Beginner";
  const readingTime = lesson.readingTime ?? "";

  const mcqs = lesson.mcqs ?? [];
  const vivaQuestions = lesson.viva ?? [];
  const flashcards = lesson.flashcards ?? [];
  const clinical = lesson.clinical ?? [];
  const practical = lesson.practical ?? [];
  const relatedTopics = (lesson.relatedTopics ?? []) as any[];

  const aiContext = buildLessonContext(lesson.slug, lesson.title);

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-10">
        <Breadcrumbs
          items={[
            {
              label: "Home",
              href: "/",
            },
            {
              label: "Anatomy",
              href: "/lessons",
            },
            {
              label: lesson.title,
            },
          ]}
        />

        <div className="grid gap-10 lg:grid-cols-3">
          {/* LEFT SIDEBAR */}
          <div>
            <LessonOutline sections={outline} />
          </div>

          {/* MAIN CONTENT */}
          <div className="lg:col-span-2">
            <LessonHeader
              category={lesson.category}
              title={lesson.title}
              description={lesson.description}
              difficulty={lesson.difficulty}
              readingTime={lesson.readingTime}
            />

            <div className="mt-4 flex justify-end">
              <BookmarkButton id={lesson.slug} title={lesson.title} />
            </div>

            <ReadingHistoryTracker
              lessonId={lesson.slug}
              lessonTitle={lesson.title}
            />

            <LessonTracker sectionId="learning-objectives">
              <div id="learning-objectives" className="scroll-mt-28">
                <LessonObjectives objectives={objectivesArr} />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="definition">
              <div className="mt-8">
                <LessonContent
                  id="definition"
                  title="Definition"
                  content={(lesson.definition ?? "") as string}
                />

                <AtlasSection section={atlas.definition} />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="introduction">
              <div className="mt-8">
                <LessonContent
                  id="introduction"
                  title="Introduction"
                  content={(lesson.introduction ?? "") as string}
                />

                <AtlasSection section={atlas.introduction} />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="anatomical-position">
              <div className="mt-8">
                <LessonContent
                  id="anatomical-position"
                  title="Anatomical Position"
                  content={(lesson.anatomicalPosition ?? "") as string}
                />

                <AtlasSection section={atlas.anatomicalPosition} />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="side-determination">
              <div className="mt-8">
                <LessonContent
                  id="side-determination"
                  title="Side Determination"
                  content={(lesson.sideDetermination ?? "") as string}
                />

                <AtlasSection section={atlas.sideDetermination} />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="features">
              <div className="mt-8">
                <LessonContent
                  id="features"
                  title="Features"
                  content={(lesson.features ?? "") as string}
                />

                <AtlasSection section={atlas.features} />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="relations">
              <div className="mt-8">
                <LessonContent
                  id="relations"
                  title="Relations"
                  content={(lesson.relations ?? "") as string}
                />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="surface-anatomy">
              <div className="mt-8">
                <LessonContent
                  id="surface-anatomy"
                  title="Surface Anatomy"
                  content={(lesson.surfaceAnatomy ?? "") as string}
                />

                <AtlasSection section={atlas.surfaceAnatomy} />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="blood-supply">
              <div className="mt-8">
                <BloodSupply vessels={(lesson.bloodSupply ?? []) as any} />

                <AtlasSection section={atlas.bloodSupply} />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="nerve-supply">
              <div className="mt-8">
                <NerveSupply nerves={(lesson.nerves ?? []) as any} />

                <AtlasSection section={atlas.nerves} />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="muscle-attachments">
              <div className="mt-8">
                <MuscleAttachments attachments={(lesson.muscles ?? []) as any} />

                <AtlasSection section={atlas.muscles} />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="ossification">
              <div className="mt-8">
                <LessonContent
                  id="ossification"
                  title="Ossification"
                  content={(lesson.ossification ?? "") as string}
                />

                <AtlasSection section={atlas.ossification} />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="development">
              <div className="mt-8">
                <LessonContent
                  id="development"
                  title="Development"
                  content={(lesson.development ?? "") as string}
                />

                <AtlasSection section={atlas.development} />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="variations">
              <div className="mt-8">
                <LessonContent
                  id="variations"
                  title="Variations"
                  content={(lesson.variations ?? "") as string}
                />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="radiological-anatomy">
              <div className="mt-8">
                <LessonContent
                  id="radiological-anatomy"
                  title="Radiological Anatomy"
                  content={(lesson.radiologicalAnatomy ?? "") as string}
                />

                <AtlasSection section={atlas.radiologicalAnatomy} />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="clinical-correlation">
              <div className="mt-8">
                <ClinicalCorrelation items={(clinical ?? []) as any} />

                <AtlasSection section={atlas.clinical} />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="practical-anatomy">
              <div className="mt-8">
                <PracticalSection items={(practical ?? []) as any} />

                <AtlasSection section={atlas.practical} />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="anatomy-landmarks">
              <div className="mt-8">
                <AnatomyLandmarks landmarks={(lesson.landmarks ?? []) as any} />

                <AtlasSection section={atlas.landmarks} />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="mnemonics">
              <div className="mt-8">
                <LessonContent
                  id="mnemonics"
                  title="Mnemonics"
                  content={(lesson.mnemonics ?? "") as string}
                />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="summary">
              <div className="mt-8">
                <LessonContent
                  id="summary"
                  title="Summary"
                  content={(typeof lesson.summary === 'string' ? (lesson.summary ?? '') : (lesson.summary?.keyPoints?.join('\n') ?? '')) as string}
                />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="mcqs">
              <div id="mcqs" className="mt-12 scroll-mt-28">
                <LessonQuiz
                  lessonId={lesson.slug}
                  title={`${lesson.title} Final Assessment`}
                  questions={mcqs as any}
                  passingScore={50}
                />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="viva">
              <div id="viva" className="mt-8">
                <VivaQuestions questions={vivaQuestions as any} />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="flashcards">
              <div id="flashcards" className="mt-8 scroll-mt-28">
                <FlashcardsSection cards={(flashcards ?? []) as any} />
              </div>
            </LessonTracker>

            <div className="mt-12">
              <AnatOSAI context={aiContext} />
            </div>

            <LessonNotes lessonId={lesson.slug} />

            <div className="mt-8">
              <RelatedTopics topics={lesson.relatedTopics} />
            </div>

            <div className="mt-8 flex gap-4">
              <button className="flex-1 rounded-xl bg-sky-700 py-3 font-semibold text-white">
                Previous Lesson
              </button>

              <button className="flex-1 rounded-xl bg-teal-600 py-3 font-semibold text-white">
                Next Lesson
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
