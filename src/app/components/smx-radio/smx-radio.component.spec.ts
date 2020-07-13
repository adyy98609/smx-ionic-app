import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmxRadioComponent } from './smx-radio.component';

describe('SmxRadioComponent', () => {
  let component: SmxRadioComponent;
  let fixture: ComponentFixture<SmxRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmxRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmxRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
