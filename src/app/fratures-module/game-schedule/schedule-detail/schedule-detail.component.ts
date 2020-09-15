import { IGameResponse } from './../game-shedule.model';
import { GameScheduleService } from './../game-schedule.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-schedule-detail',
  templateUrl: './schedule-detail.component.html',
  styleUrls: ['./schedule-detail.component.scss']
})
export class ScheduleDetailComponent implements OnInit {

  races: IGameResponse;
  isLoading: boolean = false;

  constructor( private gameScheduleService: GameScheduleService, private route: ActivatedRoute) {
    /* Getting schedule Id from route */
    this.route.paramMap.subscribe(paramMap => {
      if(paramMap) {
        this.isLoading = true;
        this.getDetailsById(paramMap.get('typeId'));
      }
    })
   }

  ngOnInit(): void {
  }

  /* Getting game response from service */
  getDetailsById(scheduleId: string) {
    this.gameScheduleService.getGameDetails(scheduleId)
    .subscribe(res => {
      this.isLoading = false;
      this.races = res
    }, err => {
      this.isLoading = false;
      console.error(err);
    })
  }



}
