import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { Subscription } from 'rxjs/index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy, DoCheck {

  mainTitle: string;
  backHome: boolean;
  ready: boolean;

  updatePageTitle$: Subscription;
  enableBackHome$: Subscription;
  titleReady$: Subscription;

  constructor(
    private headerService: HeaderService
  ) {}

  ngOnInit() {

    this.titleReady$ = this.headerService.titleReady
      .subscribe( (res: boolean) => {
        this.ready = res;
      }, (err) => {
        console.log(err);
      });

    this.updatePageTitle$ = this.headerService.updatePageTitle
      .subscribe( (res: string) => {
        this.mainTitle = res;
      }, (err) => {
        console.log(err);
      });

    this.enableBackHome$ = this.headerService.enableBackHome
      .subscribe( (res: boolean) => {
        this.backHome = res;
      }, (err) => {
        console.log(err);
      });
  }

  ngDoCheck() {
    this.ready = true;
  }

  ngOnDestroy() {
    this.updatePageTitle$.unsubscribe();
    this.enableBackHome$.unsubscribe();
    this.titleReady$.unsubscribe();
  }

}
