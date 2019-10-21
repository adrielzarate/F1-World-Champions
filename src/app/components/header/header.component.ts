import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { Subscription } from 'rxjs/index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  mainTitle: string;
  backHome: boolean;

  updatePageTitle$: Subscription;
  enableBackHome$: Subscription;

  constructor(
    private headerService: HeaderService
  ) {}

  ngOnInit() {
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

  ngOnDestroy() {
    this.updatePageTitle$.unsubscribe();
    this.enableBackHome$.unsubscribe();
  }

}
