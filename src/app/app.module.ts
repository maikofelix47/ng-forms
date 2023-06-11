import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyReactiveTemplateComponent } from './my-reactive-template/my-reactive-template.component';
import { MyTemplateTemplateComponent } from './my-template-template/my-template-template.component';
import { MyFormBuilderComponent } from './my-form-builder/my-form-builder.component';
import { MyQuestionComponent } from './my-question/my-question.component';
import { MyQuestionsComponent } from './my-questions/my-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    MyReactiveTemplateComponent,
    MyTemplateTemplateComponent,
    MyFormBuilderComponent,
    MyQuestionComponent,
    MyQuestionsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
