import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PreviewTabPage } from './preview-tab.page';

describe('PreviewTabPage', () => {
  let component: PreviewTabPage;
  let fixture: ComponentFixture<PreviewTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PreviewTabPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PreviewTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
