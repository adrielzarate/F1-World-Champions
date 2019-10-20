import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonWinnersComponent } from './season-winners.component';

describe('SeasonWinnersComponent', () => {
  let component: SeasonWinnersComponent;
  let fixture: ComponentFixture<SeasonWinnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonWinnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
