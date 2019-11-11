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
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should show data from @Input', () => {
    component.driver = {
      firstData: 'firstData',
      name: 'name',
      points: 0,
    };
    component.ngOnInit();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.season__first-data').innerText).toEqual('firstData');
    expect(fixture.nativeElement.querySelector('.season__driver-name').innerText).toEqual('name');
    expect(fixture.nativeElement.querySelector('.season__driver-points').innerText).toEqual(0 + ' Pts.');
  });

});
