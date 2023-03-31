import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../quiz.service';
import { TakeTestResponse } from './quiz-types';
import { Answer, SubmitTest } from './SubmitTest';

@Component({
  selector: 'app-take-quiz',
  templateUrl: './take-quiz.component.html',
  styleUrls: ['./take-quiz.component.css']
})
export class TakeQuizComponent implements OnInit {

  test!: TakeTestResponse

  constructor(private activatedRoute: ActivatedRoute, private quizService: QuizService) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.quizService.takeQuiz(params['id']).subscribe(response => {
        this.test = response
      })
    })
  }
  submitQuestion(form: NgForm) {
    console.log(form.value)
    const answers = new TestResultsConvertor(this.test, form.value).getTestSubmissionData()
    this.quizService.submitQuiz(this.test.quiz.id, answers).subscribe(results => {
      console.log(results)
    })
    // const submitTestData: SubmitTest = {
    //   answers:
    // }
  }

}


class TestResultsConvertor {
  constructor(private testData: TakeTestResponse, private formValue: any) { }

  getTestSubmissionData(): SubmitTest {
    const answers: Answer[] = this.testData.questions.map(question => {
      const value = this.formValue[question.id]
      if (value == null) {
        throw "did not answer the question " + question.id
      }
      if (question.type === 'multiple_choice') {
        return { question_id: question.id, choice_id: value }
      }

      return { question_id: question.id, text_answer: value }

    })

    return {
      answers: answers
    }
  }
}
