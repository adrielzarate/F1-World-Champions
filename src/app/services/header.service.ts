import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  updatePageTitle = new EventEmitter<string>();
  enableBackHome = new EventEmitter<boolean>();
  titleReady = new EventEmitter<boolean>();
}
