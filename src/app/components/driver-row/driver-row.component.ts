import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-driver-row]',
  templateUrl: './driver-row.component.html',
  styleUrls: ['./driver-row.component.scss']
})
export class DriverRowComponent implements OnInit {

  @Input() driver: object;

  constructor() { }

  ngOnInit() { }

}
