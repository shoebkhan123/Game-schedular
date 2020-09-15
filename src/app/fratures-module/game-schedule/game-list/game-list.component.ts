import { IGameSchedule } from './../game-shedule.model';
import { GameScheduleService } from './../game-schedule.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  /* Game ids */
  gameTypes = [ 'V75', 'V65', 'V64', 'V4'];
  gameInfo: IGameSchedule;
  isLoading: boolean = false;

  constructor( private router: Router, private gameScheduleService: GameScheduleService) { }

  ngOnInit(): void {
  }

  /* Get game Schedule by Id */
  onChangeGameType(gameType: string) {
    this.isLoading = true;
    if(gameType) {
      this.gameScheduleService.getRaceInformation(gameType).subscribe(res => {
        this.gameInfo = res;
        this.isLoading = false;
      }, err => {
        this.isLoading = false;
        console.error(err);
      })
    }
  }

  /* Navigate to Detail page with id of game for more information */
  navigateToScheduleDetail() {
    this.router.navigateByUrl(`game-schedule/${this.gameInfo.upcoming? this.gameInfo.upcoming[0].id: this.gameInfo.results[0].id}`)
  }

  /* Get race starting time */
  getStartingTime(gameInfo: IGameSchedule): string {
   return gameInfo?.upcoming? gameInfo?.upcoming[0]?.startTime: gameInfo?.results[0]?.startTime;
  }

}
