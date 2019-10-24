import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    const app = fixture.debugElement.componentInstance;
    app.mainTitle = 'title Example';
    fixture.detectChanges();

    const elem: HTMLElement = fixture.debugElement.query( By.css('h1') ).nativeElement;

    expect( elem.innerHTML ).toContain('title Example');
  });

  it( 'should have a link to homepage if is enabled by backHome variable', () => {

    const app = fixture.debugElement.componentInstance;
    app.backHome = true;
    fixture.detectChanges();

    const linkElement = fixture.debugElement.query( By.directive( RouterLinkWithHref ) );
    const href = linkElement.attributes['routerLink'];

    expect( href ).toEqual('/');
  });

  it( 'should not have a link element if is not enabled by backHome variable', () => {

    const app = fixture.debugElement.componentInstance;
    app.backHome = false;
    fixture.detectChanges();

    const linkElement = fixture.debugElement.query( By.css('a') );

    expect( linkElement ).toBeNull();
  });

});
