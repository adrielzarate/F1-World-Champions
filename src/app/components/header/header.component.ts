import { Component } from '@angular/core';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  mainTitle: string;
  backHome: boolean;

  constructor(
    private headerService: HeaderService
  ) {
    this.headerService.updatePageTitle.subscribe( (res: string) => {
      this.mainTitle = res;
    });
    this.headerService.enableBackHome.subscribe( (res: boolean) => {
      this.backHome = res;
    });
  }

}
