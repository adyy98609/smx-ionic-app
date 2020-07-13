import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmxLoaderComponent } from './loader.component';

describe('loaderComponent', () => {
  let component: SmxLoaderComponent;
  let fixture: ComponentFixture<SmxLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmxLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmxLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
