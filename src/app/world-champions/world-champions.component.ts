import { Component, OnInit } from '@angular/core';
import { WorldChampionsService } from '../services/world-champions.service';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-world-champions',
  templateUrl: './world-champions.component.html',
  styleUrls: ['./world-champions.component.scss']
})
export class WorldChampionsComponent implements OnInit {

  worldChampions: any;
  isLoading = true;

  constructor(
    private worldChampionsService: WorldChampionsService,
    private headerService: HeaderService
  ) {}

  ngOnInit() {
    this.headerService.updatePageTitle.emit('F1 World Champions');
    this.headerService.enableBackHome.emit(false);

    this.worldChampionsService.getWorldChampions()
      .subscribe( res => {
        this.worldChampions = res;
        this.isLoading = false;

      }, (err) => {
        console.log('Error en el appComponent');
      });
  }
}
