import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, flatMap, catchError } from 'rxjs/operators';
import { throwError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorldChampionsService {

  initialYear = 1950;
  api = 'http://ergast.com/api/f1';

  constructor(
    private http: HttpClient
  ) { }

  getWorldChampions(from: number, to: number) {

    const offset = from - this.initialYear; // 55
    const limit = to - from + 1; // 11

    return this.http.get(`${this.api}/driverStandings/1.json?limit=${limit}&offset=${offset}`)
    .pipe(
      map( res => {
        const standingsLists = res['MRData'].StandingsTable.StandingsLists;
        return standingsLists.map( driver => {
          return {
            firstData: driver.season,
            name: `${driver.DriverStandings[0].Driver.familyName} ${driver.DriverStandings[0].Driver.givenName}`,
            points: driver.DriverStandings[0].points
          };
        });
      }),
    );
  }

  getWinnersBySeason(year: number) {
    return this.http.get(`${this.api}/${year}/results/1.json`)
    .pipe(
      map( res => {
        const races = res['MRData'].RaceTable.Races;
        return races.map( driver => {
          return {
            firstData: driver.raceName,
            name: `${driver.Results[0].Driver.familyName} ${driver.Results[0].Driver.givenName}`,
            points: driver.Results[0].points
          };
        });
      }),
    );
  }

  getChampionRaceName(year: number) {
    return this.http.get(`${this.api}/${year}/driverStandings.json`)
    .pipe(
      map( res => {
        const championData = res['MRData'].StandingsTable.StandingsLists[0].DriverStandings[0];
        return championData.Driver.familyName;
      }),
      flatMap(championName => this.getLastChampionRace(year, championName)),
    );
  }

  getLastChampionRace(year: number, championName: string) {
    return this.http.get(`${this.api}/${year}/drivers/${championName}/results/1/races.json`)
    .pipe(
      map( res => {
        const races = res['MRData'].RaceTable.Races;
        const lastRace = races.pop().raceName;
        return lastRace;
      }
    ),
    );
  }

}
