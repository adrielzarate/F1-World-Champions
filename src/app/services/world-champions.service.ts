import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorldChampionsService {

  constructor( private http: HttpClient ) { }

  getWorldChampions() {
    // return this.http.get('http://ergast.com/api/f1/driverStandings/1.json?limit=11&offset=55')
    return this.http.get('../assets/dummy-data/world-champions.json')
    .pipe(
      map( res => {
        const standingsLists = res['MRData'].StandingsTable.StandingsLists;
        return standingsLists.map( driver => {
          return {
            name: driver.DriverStandings[0].Driver.familyName + ' ' + driver.DriverStandings[0].Driver.givenName,
            year: driver.season,
            points: driver.DriverStandings[0].points
          };
        });
      }),
    );
  }

  getWinnersBySeason(year: number) {
    // return this.http.get(`http://ergast.com/api/f1/${year}/results/1.json`)
    return this.http.get('../assets/dummy-data/winners-2005.json')
    .pipe(
      map( res => {
        const races = res['MRData'].RaceTable.Races;
        return races.map( driver => {
          return {
            name: driver.Results[0].Driver.familyName + ' ' + driver.Results[0].Driver.givenName,
            year: driver.season,
            points: driver.Results[0].points
          };
        });
      }),
    );
  }

}
