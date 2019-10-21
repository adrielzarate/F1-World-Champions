import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorldChampionsService {

  initialYear = 1950;
  seasonChampion: any;

  constructor(
    private http: HttpClient
  ) { }

  getWorldChampions(from: number, to: number) {

    const offset = from - this.initialYear; // 55
    const limit = to - from + 1; // 11

    return this.http.get(`http://ergast.com/api/f1/driverStandings/1.json?limit=${limit}&offset=${offset}`)
    // return this.http.get('../assets/dummy-data/world-champions.json')
    .pipe(
      map( res => {
        const standingsLists = res['MRData'].StandingsTable.StandingsLists;
        return standingsLists.map( driver => {
          return {
            firstData: driver.season,
            name: driver.DriverStandings[0].Driver.familyName + ' ' + driver.DriverStandings[0].Driver.givenName,
            points: driver.DriverStandings[0].points
          };
        });
      }),
    );
  }

  getWinnersBySeason(year: number) {

    return this.http.get(`http://ergast.com/api/f1/${year}/results/1.json`)
    // return this.http.get('../assets/dummy-data/winners-2005.json')
    .pipe(
      map( res => {
        const races = res['MRData'].RaceTable.Races;
        return races.map( driver => {
          return {
            firstData: driver.raceName,
            name: driver.Results[0].Driver.familyName + ' ' + driver.Results[0].Driver.givenName,
            points: driver.Results[0].points
          };
        });
      }),
    );
  }

  getChampionRaceName(year: number) {
    return this.http.get(`http://ergast.com/api/f1/${year}/driverStandings.json`)
    .pipe(
      map( res => {
        const championData = res['MRData'].StandingsTable.StandingsLists[0].DriverStandings[0];
        return championData.Driver.familyName;
      }),
      flatMap(championName => this.getLastChampionRace(year, championName)),
    );
  }

  getLastChampionRace(year: number, championName: string) {
    return this.http.get(`http://ergast.com/api/f1/${year}/drivers/${championName}/results/1/races.json`)
    .pipe(
      map( res => {
        const races = res['MRData'].RaceTable.Races;
        const lastRace = races.pop().raceName;
        return lastRace;
      }),
    );
  }

}
