import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmxProgressComponent } from './smx-progress.component';

describe('SmxProgressComponent', () => {
  let component: SmxProgressComponent;
  let fixture: ComponentFixture<SmxProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmxProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmxProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
