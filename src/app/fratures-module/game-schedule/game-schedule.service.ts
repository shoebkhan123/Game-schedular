import { IGameSchedule, IGameResponse } from './game-shedule.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameScheduleService {

  /* Base url */
  URL = 'https://www.atg.se/services/racinginfo/v1/api/';

  constructor(private http: HttpClient) { }

  /* Game Schedule by id */
  getRaceInformation(gameType: string) {
    return this.http.get<IGameSchedule>(this.URL + 'products/' + gameType);
  }

  /* Game response by game id */
  getGameDetails(gameId) {
    return this.http.get<IGameResponse>( this.URL + 'games/' + gameId)
  }

}
