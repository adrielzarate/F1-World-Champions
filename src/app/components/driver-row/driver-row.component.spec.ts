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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
