import { Component, OnInit } from '@angular/core';
import { myForm, FormSchema } from '../forms/my-form';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-questions',
  templateUrl: './my-questions.component.html',
  styleUrls: ['./my-questions.component.css'],
})
export class MyQuestionsComponent implements OnInit {
  qstns: FormSchema = myForm;

  myFg!: FormGroup;

  public ngOnInit(): void {
    this.generateForm();
  }

  generateForm() {
    const formControlsObj: any = {};

    this.qstns.questions.forEach((q) => {
      formControlsObj[q.id] = new FormControl('', [Validators.required]);
    });
    this.myFg = new FormGroup(formControlsObj);
  }

  saveForm() {
    console.log(this.myFg.value);
  }
}
