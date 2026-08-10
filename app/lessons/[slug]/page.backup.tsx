import { notFound } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { anatomyLessons } from "@/data/lessons/anatomy";

import Breadcrumbs from "@/components/lesson/Breadcrumbs";
import LessonOutline from "@/components/lesson/LessonOutline";
import LessonHeader from "@/components/lesson/LessonHeader";

import LessonRenderer from "@/components/lesson/LessonRenderer";
import ReadingProgress from "@/components/lesson/ReadingProgress";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function LessonPage({ params }: Props) {
  const { slug } = await params;

  console.log("slug:", slug);

  const lesson = anatomyLessons[slug as keyof typeof anatomyLessons];

  if (!lesson) {
    notFound();
  }
  return (
    <main className="min-h-screen bg-slate-50">
      <ReadingProgress />
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-10">
        <Breadcrumbs
          items={[
            {
              label: "Home",
              href: "/",
            },
            {
              label: lesson.category,
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

          <div className="lg:col-span-2">
            <LessonHeader
              category={lesson.category}
              title={lesson.title}
              description={lesson.description}
              difficulty={lesson.difficulty}
              readingTime={lesson.readingTime}
            />

            <LessonRenderer lesson={lesson} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
