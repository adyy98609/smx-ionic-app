import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmxIconComponent } from './smx-icon.component';

describe('SmxIconComponent', () => {
  let component: SmxIconComponent;
  let fixture: ComponentFixture<SmxIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmxIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmxIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
