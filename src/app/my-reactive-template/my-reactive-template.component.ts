import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-my-reactive-template',
  templateUrl: './my-reactive-template.component.html',
  styleUrls: ['./my-reactive-template.component.css'],
})
export class MyReactiveTemplateComponent implements OnInit {
  signUpForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(5),
    ]),
  });

  signUpForm2 = new FormArray([
    new FormControl('', [Validators.email, Validators.required]),
    new FormControl('', [Validators.minLength(3), Validators.maxLength(5)]),
  ]);

  signUpForm3 = this.fb.group({
    name: ['', [Validators.required, Validators.email]],
  });

  profileForm = new FormGroup({
    personalDetails: new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
    }),
    employmentDetails: new FormGroup({
      company: new FormControl(''),
      title: new FormControl(''),
    }),
  });

  mycontrol = new FormControl('', [
    Validators.minLength(5),
    Validators.required,
  ]);

  constructor(private fb: FormBuilder) {}

  onSave() {
    console.log(this.signUpForm.value);
  }

  ngOnInit(): void {}
  addInput() {
    this.signUpForm2.push(
      new FormControl('', [Validators.email, Validators.required])
    );
  }
  saveProfile() {}
  saveMyControl() {}
  get email() {
    return this.signUpForm.get('email');
  }
  get firstName() {
    return this.profileForm.get('personalDetails.firstName');
  }
}
