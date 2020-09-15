import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameScheduleRoutingModule } from './game-schedule-routing.module';
import { GameScheduleComponent } from './game-schedule.component';
import { GameListComponent } from './game-list/game-list.component';
import { ScheduleDetailComponent } from './schedule-detail/schedule-detail.component';


@NgModule({
  declarations: [GameScheduleComponent, GameListComponent, ScheduleDetailComponent],
  imports: [
    CommonModule,
    GameScheduleRoutingModule
  ]
})
export class GameScheduleModule { }
