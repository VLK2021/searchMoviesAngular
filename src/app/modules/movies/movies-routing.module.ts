import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {MoviesComponent} from "./movies-component/movies/movies.component";
import {MovieDetailsComponent} from "./movies-component/movie-details/movie-details.component";


let routes: Routes = [
  {
    path: '', component: MoviesComponent,
    children: [
      {path: ':id', component: MovieDetailsComponent}
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MoviesRoutingModule {
}
