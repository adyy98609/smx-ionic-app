import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmxSocialRecommendationComponent } from './social-recommendation.component';

describe('SmxSocialRecommendationComponent', () => {
  let component: SmxSocialRecommendationComponent;
  let fixture: ComponentFixture<SmxSocialRecommendationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmxSocialRecommendationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmxSocialRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
