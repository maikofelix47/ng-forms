import { Component } from '@angular/core';

@Component({
  selector: 'app-my-template-template',
  templateUrl: './my-template-template.component.html',
  styleUrls: ['./my-template-template.component.css'],
})
export class MyTemplateTemplateComponent {
  email = '';
  password = '';
  errorObj = {
    message: '',
    show: false,
  };

  onSave() {
    this.validateInput();
  }
  validateInput() {
    if (this.email === '') {
      this.errorObj = {
        message: 'Please enter email',
        show: true,
      };
    }
  }
}
