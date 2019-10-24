import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonWinnersComponent } from './season-winners.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { HeaderService } from 'src/app/services/header.service';
import { from } from 'rxjs';
import { WorldChampionsService } from 'src/app/services/world-champions.service';

describe('SeasonWinnersComponent', () => {
  let component: SeasonWinnersComponent;
  let fixture: ComponentFixture<SeasonWinnersComponent>;
  const worldChampionsService = new WorldChampionsService(null);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonWinnersComponent ],
      providers: [{
        provide: ActivatedRoute, useValue: {
          snapshot: {
            params: {
              season: 2005
            }
          },
        }
      },
      HeaderService,
      WorldChampionsService
      ],
      imports: [ HttpClientModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should set page title at ngOnInit', () => {
    const season = 2005;
    const spy = spyOn( component, 'setPageTitle' );
    component.ngOnInit();
    expect( spy ).toHaveBeenCalledWith(season);
  });

});
