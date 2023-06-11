import { Component, Input } from '@angular/core';
import { Question } from '../forms/my-form';

@Component({
  selector: 'app-my-question',
  templateUrl: './my-question.component.html',
  styleUrls: ['./my-question.component.css'],
})
export class MyQuestionComponent {
  @Input() qstn!: Question;
  @Input() fg: any;

  get singleQstn() {
    return this.fg.get(this.qstn.id);
  }
}
