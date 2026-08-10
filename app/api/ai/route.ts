import { NextResponse } from "next/server";
import { openai } from "@/lib/openai";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { prompt } = body;

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 },
      );
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content:
            "You are AnatOS AI Tutor, a medical anatomy assistant. Explain anatomy clearly for medical and nursing students.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    return NextResponse.json({
      answer: response.choices[0].message.content,
    });
  } catch (error) {
    console.error("AI Error:", error);

    return NextResponse.json(
      { error: "Something went wrong with AI service" },
      { status: 500 },
    );
  }
}
 