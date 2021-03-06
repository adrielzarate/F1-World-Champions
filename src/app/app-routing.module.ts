import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorldChampionsComponent } from './components/world-champions/world-champions.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SeasonWinnersComponent } from './components/season-winners/season-winners.component';


const routes: Routes = [
  {
    path: '',
    component: WorldChampionsComponent
  },
  {
    path: 'season/:season',
    component: SeasonWinnersComponent
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
