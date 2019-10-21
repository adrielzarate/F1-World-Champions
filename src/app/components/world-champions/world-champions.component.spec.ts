import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldChampionsComponent } from './world-champions.component';

describe('WorldChampionsComponent', () => {
  let component: WorldChampionsComponent;
  let fixture: ComponentFixture<WorldChampionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldChampionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldChampionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
