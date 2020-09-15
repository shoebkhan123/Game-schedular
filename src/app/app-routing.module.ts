import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'game-schedule', pathMatch: 'full'},
  { path: 'game-schedule', loadChildren: () => import('./fratures-module/game-schedule/game-schedule.module').then(m => m.GameScheduleModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
