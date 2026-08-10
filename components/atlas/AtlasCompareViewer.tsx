"use client";

import Image from "next/image";

import { AtlasFigure } from "./types";

interface Props {
  left: AtlasFigure;
  right: AtlasFigure;
}

export default function AtlasCompareViewer({
  left,
  right,
}: Props) {
  return (
    <div className="my-10 grid gap-8 lg:grid-cols-2">

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow">

        <Image
          src={left.src}
          alt={left.title}
          width={1000}
          height={1000}
          className="w-full rounded-xl"
        />

        <h3 className="mt-4 text-center text-xl font-bold">
          {left.title}
        </h3>

        <p className="mt-2 text-center text-slate-600">
          {left.caption}
        </p>

      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow">

        <Image
          src={right.src}
          alt={right.title}
          width={1000}
          height={1000}
          className="w-full rounded-xl"
        />

        <h3 className="mt-4 text-center text-xl font-bold">
          {right.title}
        </h3>

        <p className="mt-2 text-center text-slate-600">
          {right.caption}
        </p>

      </div>

    </div>
  );
}