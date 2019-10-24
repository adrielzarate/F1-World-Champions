import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverRowComponent } from './driver-row.component';

describe('DriverRowComponent', () => {
  let component: DriverRowComponent;
  let fixture: ComponentFixture<DriverRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverRowComponent);
    component = fixture.componentInstance;
    const app = fixture.debugElement.componentInstance;
    app.driver = {
      firstData: 'dummyFirstData',
      name: 'dummyName',
      points: 'dummyPoints',
    };
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });


});
