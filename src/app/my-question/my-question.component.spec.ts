import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyQuestionComponent } from './my-question.component';

describe('MyQuestionComponent', () => {
  let component: MyQuestionComponent;
  let fixture: ComponentFixture<MyQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
