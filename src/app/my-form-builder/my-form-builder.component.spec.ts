import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFormBuilderComponent } from './my-form-builder.component';

describe('MyFormBuilderComponent', () => {
  let component: MyFormBuilderComponent;
  let fixture: ComponentFixture<MyFormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFormBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
