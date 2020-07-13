import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmxTileComponent } from './smx-tile.component';

describe('SmxTileComponent', () => {
  let component: SmxTileComponent;
  let fixture: ComponentFixture<SmxTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmxTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmxTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
