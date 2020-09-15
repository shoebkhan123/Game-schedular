import { ScheduleDetailComponent } from './schedule-detail/schedule-detail.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameScheduleComponent } from './game-schedule.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: GameScheduleComponent,
             children: [
               { path: '', component: GameListComponent },
                { path: ':typeId', component: ScheduleDetailComponent }
             ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameScheduleRoutingModule { }
