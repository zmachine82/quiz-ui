import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { TakeQuizComponent } from './take-quiz/take-quiz.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: '', component: QuizListComponent},
      {path: 'quiz/:id', component: TakeQuizComponent},
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
