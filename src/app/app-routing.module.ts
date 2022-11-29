import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";


let routes:Routes = [
  {path: '', redirectTo: 'movies', pathMatch: "full"},
  {path:'movies', loadChildren:() => import('./modules/movies/movies.module').then(m=>m.MoviesModule)},
  {path:'serials', loadChildren:() => import('./modules/serials/serials.module').then(m=>m.SerialsModule)},
  {path:'actor', loadChildren:() => import('./modules/actors/actors.module').then(m=>m.ActorsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
