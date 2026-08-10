"use client";

import { useState } from "react";
import Image from "next/image";

type ImageItem = {
  src: string;
  title: string;
  description: string;
};

interface ImageGalleryProps {
  images: ImageItem[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [current, setCurrent] = useState(0);

  const [fullscreen, setFullscreen] = useState(false);

  const previous = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const next = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const image = images[current];

  return (
    <section id="image-gallery">
      <div className="mb-10">
        <h2 className="text-4xl font-bold text-slate-900">Anatomy Atlas</h2>

        <p className="mt-3 text-slate-600">
          Browse the anatomical images one at a time just like a real anatomy
          atlas.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border bg-white shadow-xl">
        <div className="bg-slate-100 px-6 py-3 flex items-center justify-between">
          <span className="font-semibold text-sky-700">
            Image {current + 1} of {images.length}
          </span>

          <div className="flex gap-2">
            <button
              onClick={previous}
              className="rounded-lg bg-slate-200 px-4 py-2 hover:bg-slate-300"
            >
              ← Previous
            </button>

            <button
              onClick={next}
              className="rounded-lg bg-sky-700 px-4 py-2 text-white hover:bg-sky-800"
            >
              Next →
            </button>
          </div>
        </div>

        <Image
          src={image.src}
          alt={image.title}
          width={1400}
          height={900}
          priority
          onClick={() => setFullscreen(true)}
          className="mx-auto h-auto max-h-[80vh] w-auto max-w-full cursor-zoom-in object-contain transition hover:scale-[1.01]"
        />

        <div className="p-8">
          <h3 className="text-3xl font-bold text-slate-900">{image.title}</h3>

          <p className="mt-4 leading-8 text-slate-600">{image.description}</p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-5 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {images.map((item, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`overflow-hidden rounded-xl border-2 transition ${
              current === index ? "border-sky-600" : "border-slate-200"
            }`}
          >
            <Image
              src={item.src}
              alt={item.title}
              width={180}
              height={120}
              className="w-full"
            />
          </button>
        ))}
      </div>

      {fullscreen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
          onClick={() => setFullscreen(false)}
        >
          <div className="relative max-h-full max-w-7xl">
            <button
              className="absolute right-4 top-4 rounded-full bg-white px-4 py-2 font-bold shadow"
              onClick={() => setFullscreen(false)}
            >
              ✕
            </button>

            <Image
              src={image.src}
              alt={image.title}
              width={1800}
              height={1200}
              className="max-h-[90vh] w-auto rounded-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
