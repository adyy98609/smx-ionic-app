import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmxInputComponent } from './smx-input.component';

describe('SmxInputComponent', () => {
  let component: SmxInputComponent;
  let fixture: ComponentFixture<SmxInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmxInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmxInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
