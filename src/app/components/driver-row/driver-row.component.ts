import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-driver-row]',
  templateUrl: './driver-row.component.html',
  styleUrls: ['./driver-row.component.scss']
})
export class DriverRowComponent implements OnInit {

  isSeasonWinner: boolean;

  @Input() driver: any;

  constructor() { }

  ngOnInit() {
    this.isSeasonWinner = isNaN(this.driver.firstData);
  }

}
