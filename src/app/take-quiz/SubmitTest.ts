export interface SubmitTest {
  answers: Answer[];
}

export interface Answer {
  question_id:  number;
  choice_id?:   number;
  text_answer?: string;
}
