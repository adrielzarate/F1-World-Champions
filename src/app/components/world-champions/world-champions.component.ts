import { Component, OnInit, OnDestroy } from '@angular/core';
import { WorldChampionsService } from '../../services/world-champions.service';
import { HeaderService } from '../../services/header.service';
import { Subscription } from 'rxjs/index';

@Component({
  selector: 'app-world-champions',
  templateUrl: './world-champions.component.html',
  styleUrls: ['./world-champions.component.scss']
})
export class WorldChampionsComponent implements OnInit, OnDestroy {

  worldChampions: any;
  isLoading = true;

  worldChampions$: Subscription;

  constructor(
    private worldChampionsService: WorldChampionsService,
    private headerService: HeaderService
  ) {}

  ngOnInit() {
    this.headerService.updatePageTitle.emit('F1 World Champions');
    this.headerService.enableBackHome.emit(false);

    this.worldChampions$ = this.worldChampionsService.getWorldChampions(2005, 2015)
      .subscribe( res => {
        this.worldChampions = res;
        this.isLoading = false;
      }, (err) => {
        console.log(console.log(err));
      });
  }

  ngOnDestroy() {
    this.worldChampions$.unsubscribe();
  }
}
