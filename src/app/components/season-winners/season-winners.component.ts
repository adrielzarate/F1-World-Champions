import { Component, OnInit } from '@angular/core';
import { WorldChampionsService } from '../../services/world-champions.service';
import { ActivatedRoute } from '@angular/router';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-season-winners',
  templateUrl: './season-winners.component.html',
  styleUrls: ['./season-winners.component.scss']
})
export class SeasonWinnersComponent implements OnInit {

  seasonWinners: any;
  championRaceName: any;
  isLoading = true;

  constructor(
    private worldChampionsService: WorldChampionsService,
    private route: ActivatedRoute,
    private headerService: HeaderService
  ) { }

  ngOnInit() {

    const season = +this.route.snapshot.params.season;

    this.headerService.updatePageTitle.emit('F1 Winners in Season ' + season);
    this.headerService.enableBackHome.emit(true);

    this.worldChampionsService.getChampionRaceName(season)
      .subscribe(res => {
        this.championRaceName = res;
      });

    this.worldChampionsService.getWinnersBySeason(season)
      .subscribe( res => {
        this.seasonWinners = res;
        this.isLoading = false;
      }, (err) => {
        console.log('Error en el appComponent');
      });
  }
}
