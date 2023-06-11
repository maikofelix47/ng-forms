import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReactiveTemplateComponent } from './my-reactive-template.component';

describe('MyReactiveTemplateComponent', () => {
  let component: MyReactiveTemplateComponent;
  let fixture: ComponentFixture<MyReactiveTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyReactiveTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyReactiveTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
