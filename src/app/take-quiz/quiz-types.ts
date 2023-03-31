import { Quiz } from "../quiz-list/quiz";

export interface TakeTestResponse {
  questions: Question[];
  quiz:      Quiz;
}

export interface Question {
  question: string;
  id:       number;
  type:     string;
  choices?: Choice[];
}

export interface Choice {
  id:   number;
  text: string;
}

