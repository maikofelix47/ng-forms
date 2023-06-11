import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyReactiveTemplateComponent } from './my-reactive-template/my-reactive-template.component';
import { MyTemplateTemplateComponent } from './my-template-template/my-template-template.component';
import { MyFormBuilderComponent } from './my-form-builder/my-form-builder.component';

const routes: Routes = [
  {
    path: 'reactive',
    component: MyReactiveTemplateComponent,
    title: 'reactive',
  },
  {
    path: 'template',
    component: MyTemplateTemplateComponent,
    title: 'template',
  },
  {
    path: 'form-builder',
    component: MyFormBuilderComponent,
    title: 'Formbuilder',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
