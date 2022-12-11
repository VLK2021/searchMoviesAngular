import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {GenresComponent} from "./genres-components/genres/genres.component";
import {GenresMoviesListComponent} from "./genres-components/genres-movies-list/genres-movies-list.component";
import {MovieDetailsComponent} from "../movies/movies-component/movie-details/movie-details.component";


let routes: Routes = [
  {
    path: '', component: GenresComponent, children: [
      {path: '', redirectTo: '/genres/35', pathMatch: "full"},
      {path: ':id', component: GenresMoviesListComponent},
      {path: ':id/:id', component:MovieDetailsComponent}
    ]
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenresRoutingModule {
}
