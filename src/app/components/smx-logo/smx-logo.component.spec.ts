import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmxLogoComponent } from './smx-logo.component';

describe('SmxLogoComponent', () => {
  let component: SmxLogoComponent;
  let fixture: ComponentFixture<SmxLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmxLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmxLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
