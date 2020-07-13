import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmxFooterComponent } from './smx-footer.component';

describe('SmxFooterComponent', () => {
  let component: SmxFooterComponent;
  let fixture: ComponentFixture<SmxFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmxFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmxFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
