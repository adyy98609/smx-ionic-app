import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CreateTab } from './create-tab.page';

describe('CreateTab', () => {
  let component: CreateTab;
  let fixture: ComponentFixture<CreateTab>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTab],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
