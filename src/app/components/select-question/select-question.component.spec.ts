import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmxSelectQuestionComponent } from './select-question.component';

describe('SelectQuestionComponent', () => {
  let component: SmxSelectQuestionComponent;
  let fixture: ComponentFixture<SmxSelectQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SmxSelectQuestionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmxSelectQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
