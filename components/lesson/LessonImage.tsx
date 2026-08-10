"use client";

import Image from "next/image";

interface LessonImageProps {
  src: string;
  alt: string;
  caption?: string;
  layout?: "center" | "left" | "right" | "wide";
}

export default function LessonImage({
  src,
  alt,
  caption,
  layout = "center",
}: LessonImageProps) {
  const layoutClass = {
    center: "mx-auto max-w-3xl",
    left: "mr-auto max-w-xl",
    right: "ml-auto max-w-xl",
    wide: "w-full",
  }[layout];

  return (
    <figure className="my-8 overflow-hidden rounded-2xl border bg-white shadow">
      <div className={`my-8 ${layoutClass}`}>
        <Image src={src} alt={alt} fill className="object-contain" />
      </div>

      {caption && (
        <figcaption className="border-t bg-slate-50 px-5 py-3 text-center text-sm text-slate-600">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
