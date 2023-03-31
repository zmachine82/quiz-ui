import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quiz } from './quiz-list/quiz';
import { TakeTestResponse } from './take-quiz/quiz-types';
import { SubmitTest } from './take-quiz/SubmitTest';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }


  getAllQuizzes() {
    return this.http.get<Quiz[]>('http://localhost:3000/quiz_tests')
  }

  takeQuiz(id: number) {
    return this.http.get<TakeTestResponse>(`http://localhost:3000/quiz_tests/${id}/take`)
  }

  submitQuiz(quizId: number, answers: SubmitTest) {
    return this.http.post(`http://localhost:3000/quiz_tests/${quizId}/submit`, answers)
  }
}
