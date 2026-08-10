export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: number;

  question: string;

  options: QuizOption[];

  answer: string;

  explanation?: string;

  image?: string;

  difficulty?: string;

  topic?: string;
}

export interface LessonQuizProps {
  title: string;

  questions: QuizQuestion[];

  passingScore?: number;
}

export interface QuizResult {
  totalQuestions: number;

  correctAnswers: number;

  wrongAnswers: number;

  unansweredQuestions: number;

  score: number;

  percentage: number;

  passed: boolean;
}

export interface UserAnswer {
  questionId: number;

  selectedAnswer: string;
}