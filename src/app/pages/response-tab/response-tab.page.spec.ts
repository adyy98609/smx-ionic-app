import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ResponseTabPage } from './response-tab.page';

describe('ShareTabPage', () => {
  let component: ResponseTabPage;
  let fixture: ComponentFixture<ResponseTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResponseTabPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ResponseTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
