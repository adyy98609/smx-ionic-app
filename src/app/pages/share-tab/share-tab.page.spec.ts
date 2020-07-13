import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ShareTabPage } from './share-tab.page';

describe('ShareTabPage', () => {
  let component: ShareTabPage;
  let fixture: ComponentFixture<ShareTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShareTabPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ShareTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
