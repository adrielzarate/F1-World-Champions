import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(
    private headerService: HeaderService
  ) { }

  ngOnInit() {
    this.headerService.updatePageTitle.emit('There is not results for this search');
    this.headerService.enableBackHome.emit(true);
  }

}
