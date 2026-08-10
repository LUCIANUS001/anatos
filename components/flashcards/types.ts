export interface Flashcard {
  front: string;
  back: string;
}

export interface FlashcardResult {
  mastered: number;
  review: number;
  total: number;
}