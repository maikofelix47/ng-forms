import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTemplateTemplateComponent } from './my-template-template.component';

describe('MyTemplateTemplateComponent', () => {
  let component: MyTemplateTemplateComponent;
  let fixture: ComponentFixture<MyTemplateTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTemplateTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTemplateTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
