import { NextRequest, NextResponse } from "next/server";

import { openai } from "@/lib/openai";

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        {
          success: false,
          answer: "Please provide a question.",
        },
        { status: 400 },
      );
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content:
            "You are AnatOS AI Tutor. You teach human anatomy to medical, nursing, physiotherapy, and allied health students. Give accurate, clear, educational explanations.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    return NextResponse.json({
      success: true,
      answer: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("AnatOS AI Error:", error);

    return NextResponse.json(
      {
        success: false,
        answer: "AI service failed. Please try again.",
      },
      { status: 500 },
    );
  }
};