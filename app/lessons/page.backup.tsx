import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ClinicalCorrelation from "@/components/lesson/ClinicalCorrelation";
import ImageGallery from "@/components/lesson/ImageGallery";
import AnatomyLandmarks from "@/components/lesson/AnatomyLandmarks";
import MuscleAttachments from "@/components/lesson/MuscleAttachments";
import BloodSupply from "@/components/lesson/BloodSupply";
import NerveSupply from "@/components/lesson/NerveSupply";
import PracticalSection from "@/components/lesson/PracticalSection";
import VivaQuestions from "@/components/lesson/VivaQuestions";
import FlashcardsSection from "@/components/lesson/FlashcardsSection";
import RelatedTopics from "@/components/lesson/RelatedTopics";
import LessonProgress from "@/components/lesson/LessonProgress";
import LessonQuiz from "@/components/lesson/quiz/LessonQuiz";
import Breadcrumbs from "@/components/lesson/Breadcrumbs";
import LessonOutline from "@/components/lesson/LessonOutline";
import LessonHeader from "@/components/lesson/LessonHeader";
import LessonObjectives from "@/components/lesson/LessonObjectives";
import LessonContent from "@/components/lesson/LessonContent";
import InfoBox from "@/components/lesson/InfoBox";
import LessonTracker from "@/components/lesson/LessonTracker";
import BookmarkButton from "@/components/lesson/BookmarkButton";
import LessonNotes from "@/components/lesson/LessonNotes";
import ReadingHistoryTracker from "@/components/lesson/ReadingHistoryTracker";
import { anatomyLessons } from "@/data/lessons/anatomy";

export default function LessonsPage() {
  const lesson = anatomyLessons.humerus;

  if (!lesson) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Lesson not found.</h1>
      </main>
    );
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
              label: "Gross Anatomy",
              href: "/courses",
            },
            {
              label: "Upper Limb",
              href: "/courses",
            },
            {
              label: lesson.title,
            },
          ]}
        />

        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <LessonOutline sections={lesson.outline} />
          </div>

          {/* LEFT */}

          <div className="lg:col-span-2">
            <LessonHeader
              category={lesson.category}
              title={lesson.title}
              description={lesson.description}
              difficulty={lesson.difficulty}
              readingTime={lesson.readingTime}
            />

            <div className="mt-4 flex justify-end">
              <BookmarkButton id={lesson.title} title={lesson.title} />
            </div>

            <ReadingHistoryTracker lessonId="humerus" lessonTitle="Humerus" />

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
              </div>
            </LessonTracker>

            <LessonTracker sectionId="introdution">
              <div className="mt-8">
                <LessonContent
                  id="introduction"
                  title="Introduction"
                  content={lesson.introduction}
                />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="anatomical-position">
              <div className="mt-8">
                <LessonContent
                  id="anatomical-position"
                  title="Anatomical Position"
                  content={lesson.anatomicalPosition}
                />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="side-determination">
              <div className="mt-8">
                <LessonContent
                  id="side-determination"
                  title="Side Determination"
                  content={lesson.sideDetermination}
                />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="features">
              <div className="mt-8">
                <LessonContent
                  id="features"
                  title="Features"
                  content={lesson.features}
                />
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
              </div>
            </LessonTracker>

            <LessonTracker sectionId="blood-suppy">
              <div className="mt-8">
                <BloodSupply vessels={lesson.bloodSupply} />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="nerve-supply">
              <div className="mt-8">
                <NerveSupply nerves={lesson.nerves} />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="muscle-attachments">
              <div className="mt-8">
                <MuscleAttachments attachments={lesson.muscles} />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="ossification">
              <div className="mt-8">
                <LessonContent
                  id="ossification"
                  title="Ossification"
                  content={lesson.ossification}
                />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="development">
              <div className="mt-8">
                <LessonContent
                  id="development"
                  title="Development"
                  content={lesson.development}
                />
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
              </div>
            </LessonTracker>

            <LessonTracker sectionId="clinical-correlation">
              <div className="mt-8">
                <ClinicalCorrelation items={lesson.clinical} />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="practical-anatomy">
              <div className="mt-8">
                <PracticalSection items={lesson.practical} />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="anatomy-landmarks">
              <div className="mt-8">
                <AnatomyLandmarks landmarks={lesson.landmarks} />
              </div>
            </LessonTracker>

            <LessonTracker sectionId="anatomy-atlas">
              <div id="anatomy-atlas" className="mt-8 scroll-mt-28">
                <div className="rounded-3xl bg-white p-6 shadow">
                  <ImageGallery images={lesson.images} />
                </div>
              </div>
            </LessonTracker>

            <div className="mt-6">
              <InfoBox icon="💡" title="Clinical Pearl">
                The humerus is one of the most frequently fractured long bones.
                Knowing its anatomical landmarks helps explain nerve injuries
                and fracture patterns commonly encountered in clinical practice.
              </InfoBox>
            </div>

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

            <LessonTracker sectionId="mcqs">
              <div
                id="mcqs"
                className="mt-12 scroll-mt-28 text-3xl font-bold text-slate-900"
              >
                Multiple Choice Questions (MCQs)
                <LessonQuiz
                  title={`${lesson.title} Final Assessment`}
                  questions={lesson.mcqs}
                  passingScore={50}
                />
              </div>
            </LessonTracker>

            <div id="relate-topics" className="mt-8">
              <RelatedTopics topics={lesson.relatedTopics} />
            </div>

            <div className="mt-12 rounded-3xl border border-sky-200 bg-gradient-to-r from-sky-50 to-cyan-50 p-8 shadow">
              <div className="flex items-center gap-3">
                <span className="text-4xl">🤖</span>

                <div>
                  <h2 className="text-3xl font-bold text-slate-900">
                    Ask AnatOS AI
                  </h2>

                  <p className="mt-2 text-slate-600">
                    Ask any question about this lesson. AnatOS AI will explain
                    concepts, answer difficult questions, and help you prepare
                    for examinations.
                  </p>
                </div>
              </div>

              <textarea
                placeholder="Example: Why is the surgical neck of the humerus clinically important?"
                className="mt-8 h-36 w-full rounded-2xl border border-slate-300 p-4 outline-none transition focus:border-sky-600"
              />

              <button className="mt-6 rounded-xl bg-sky-700 px-8 py-3 font-semibold text-white transition hover:bg-sky-800">
                Ask AnatOS AI
              </button>
            </div>

            <LessonProgress />

            <LessonNotes lessonId="humerus" />

            <div className="mt-8">
              <a
                href="/quiz"
                className="block rounded-xl bg-sky-700 py-4 text-center font-semibold text-white transition hover:bg-sky-800"
              >
                Start Lesson Quiz
              </a>
            </div>

            <div className="mt-8 flex gap-4">
              <button className="flex-1 rounded-xl bg-sky-700 py-3 font-semibold text-white hover:bg-sky-800">
                Previous Lesson
              </button>

              <button className="flex-1 rounded-xl bg-teal-600 py-3 font-semibold text-white hover:bg-teal-700">
                Next Lesson
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT */}
      </section>

      <Footer />
    </main>
  );
}
