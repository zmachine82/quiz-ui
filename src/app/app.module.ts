import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { HttpClientModule } from "@angular/common/http";
import { QuizDisplayComponent } from './quiz-list/quiz-display/quiz-display.component';
import { TakeQuizComponent } from './take-quiz/take-quiz.component';
import { QuestionComponent } from './take-quiz/question/question.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuizListComponent,
    QuizDisplayComponent,
    TakeQuizComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
