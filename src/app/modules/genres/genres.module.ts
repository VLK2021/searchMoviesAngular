import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenresComponent } from './genres-components/genres/genres.component';
import {GenresRoutingModule} from "./genres-routing.module";
import {HttpClientModule} from "@angular/common/http";
import { GenreComponent } from './genres-components/genre/genre.component';
import { GenresMoviesListComponent } from './genres-components/genres-movies-list/genres-movies-list.component';
import { GenreMovieListComponent } from './genres-components/genre-movie-list/genre-movie-list.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    GenresComponent,
    GenreComponent,
    GenresMoviesListComponent,
    GenreMovieListComponent
  ],
  imports: [
    CommonModule,
    GenresRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  exports:[
    GenresComponent
  ],
  providers:[

  ]
})
export class GenresModule { }
