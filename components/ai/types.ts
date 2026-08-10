export interface AIContext {
  lessonId: string;
  lessonTitle: string;
  currentSection?: string;
  hotspotId?: string;
}

export interface AIMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export interface AIRequest {
  context: AIContext;
  question: string;
}
