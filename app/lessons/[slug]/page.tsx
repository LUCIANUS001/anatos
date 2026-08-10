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

import AnatOSAI from "@/components/ai/AnatOSAI";
import { buildLessonContext } from "@/components/ai/AIContext";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function LessonPage({ params }: PageProps) {
  const { slug } = await params;

  const lesson = anatomyLessons[slug as keyof typeof anatomyLessons];

  const aiContext = buildLessonContext(lesson.slug, lesson.title);

  if (!lesson) {
    notFound();
  }

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
            <LessonOutline sections={lesson.outline} />
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
                <LessonObjectives objectives={lesson.objectives} />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="definition">
              <div className="mt-8">
                <LessonContent
                  id="definition"
                  title="Definition"
                  content={lesson.definition}
                />

                <AtlasSection section={lesson.atlas.definition} />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="introduction">
              <div className="mt-8">
                <LessonContent
                  id="introduction"
                  title="Introduction"
                  content={lesson.introduction}
                />

                <AtlasSection section={lesson.atlas.introduction} />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="anatomical-position">
              <div className="mt-8">
                <LessonContent
                  id="anatomical-position"
                  title="Anatomical Position"
                  content={lesson.anatomicalPosition}
                />

                <AtlasSection section={lesson.atlas.anatomicalPosition} />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="side-determination">
              <div className="mt-8">
                <LessonContent
                  id="side-determination"
                  title="Side Determination"
                  content={lesson.sideDetermination}
                />

                <AtlasSection section={lesson.atlas.sideDetermination} />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="features">
              <div className="mt-8">
                <LessonContent
                  id="features"
                  title="Features"
                  content={lesson.features}
                />

                <AtlasSection section={lesson.atlas.features} />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="relations">
              <div className="mt-8">
                <LessonContent
                  id="relations"
                  title="Relations"
                  content={lesson.relations}
                />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="surface-anatomy">
              <div className="mt-8">
                <LessonContent
                  id="surface-anatomy"
                  title="Surface Anatomy"
                  content={lesson.surfaceAnatomy}
                />

                <AtlasSection section={lesson.atlas.surfaceAnatomy} />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="blood-supply">
              <div className="mt-8">
                <BloodSupply vessels={lesson.bloodSupply} />

                <AtlasSection section={lesson.atlas.bloodSupply} />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="nerve-supply">
              <div className="mt-8">
                <NerveSupply nerves={lesson.nerves} />

                <AtlasSection section={lesson.atlas.nerves} />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="muscle-attachments">
              <div className="mt-8">
                <MuscleAttachments attachments={lesson.muscles} />

                <AtlasSection section={lesson.atlas.muscles} />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="ossification">
              <div className="mt-8">
                <LessonContent
                  id="ossification"
                  title="Ossification"
                  content={lesson.ossification}
                />

                <AtlasSection section={lesson.atlas.ossification} />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="development">
              <div className="mt-8">
                <LessonContent
                  id="development"
                  title="Development"
                  content={lesson.development}
                />

                <AtlasSection section={lesson.atlas.development} />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="variations">
              <div className="mt-8">
                <LessonContent
                  id="variations"
                  title="Variations"
                  content={lesson.variations}
                />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="radiological-anatomy">
              <div className="mt-8">
                <LessonContent
                  id="radiological-anatomy"
                  title="Radiological Anatomy"
                  content={lesson.radiologicalAnatomy}
                />

                <AtlasSection section={lesson.atlas.radiologicalAnatomy} />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="clinical-correlation">
              <div className="mt-8">
                <ClinicalCorrelation items={lesson.clinical} />

                <AtlasSection section={lesson.atlas.clinical} />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="practical-anatomy">
              <div className="mt-8">
                <PracticalSection items={lesson.practical} />

                <AtlasSection section={lesson.atlas.practical} />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="anatomy-landmarks">
              <div className="mt-8">
                <AnatomyLandmarks landmarks={lesson.landmarks} />

                <AtlasSection section={lesson.atlas.landmarks} />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="mnemonics">
              <div className="mt-8">
                <LessonContent
                  id="mnemonics"
                  title="Mnemonics"
                  content={lesson.mnemonics}
                />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="summary">
              <div className="mt-8">
                <LessonContent
                  id="summary"
                  title="Summary"
                  content={lesson.summary}
                />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="mcqs">
              <div id="mcqs" className="mt-12 scroll-mt-28">
                <LessonQuiz
                  lessonId="humerus"
                  title={`${lesson.title} Final Assessment`}
                  questions={lesson.mcqs}
                  passingScore={50}
                />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="viva">
              <div id="viva" className="mt-8">
                <VivaQuestions questions={lesson.viva} />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="flashcards">
              <div id="flashcards" className="mt-8 scroll-mt-28">
                <FlashcardsSection cards={lesson.flashcards} />
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
