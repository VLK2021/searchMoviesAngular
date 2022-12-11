import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {GenresComponent} from "./genres-components/genres/genres.component";
import {GenresMoviesListComponent} from "./genres-components/genres-movies-list/genres-movies-list.component";


let routes: Routes = [
  {
    path: '', component: GenresComponent, children: [
      {path: '', redirectTo: '/genres/35', pathMatch: "full"},
      {path: ':id', component: GenresMoviesListComponent},
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
