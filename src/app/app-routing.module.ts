import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";


let routes:Routes = [
  {path: '', redirectTo: 'movies', pathMatch: "full"},
  {path:'movies', loadChildren:() => import('./modules/movies/movies.module').then(m=>m.MoviesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
