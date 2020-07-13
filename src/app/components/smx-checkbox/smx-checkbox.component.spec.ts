import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmxCheckboxComponent } from './smx-checkbox.component';

describe('SmxCheckboxComponent', () => {
  let component: SmxCheckboxComponent;
  let fixture: ComponentFixture<SmxCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmxCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmxCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
