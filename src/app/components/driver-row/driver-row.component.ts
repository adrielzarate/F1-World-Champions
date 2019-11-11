import { Component, OnInit, Input } from '@angular/core';
import { Driver } from '../models/driver.model';

@Component({
  selector: '[app-driver-row]',
  templateUrl: './driver-row.component.html',
  styleUrls: ['./driver-row.component.scss']
})
export class DriverRowComponent implements OnInit {

  @Input() driver: Driver;

  constructor() { }

  ngOnInit() { }

}
