import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { Question } from '../quiz-types';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class QuestionComponent {
submitQuestion() {
throw new Error('Method not implemented.');
}

  @Input() question!: Question;


}
