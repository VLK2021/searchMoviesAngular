import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { MoviesComponent } from './movies-component/movies/movies.component';
import {MoviesRoutingModule} from "./movies-routing.module";
import { MovieComponent } from './movies-component/movie/movie.component';
import { MovieDetailsComponent } from './movies-component/movie-details/movie-details.component';
import {MoviesService} from "./movie-services/movies.service";


@NgModule({
  declarations: [
    MoviesComponent,
    MovieComponent,
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    HttpClientModule
  ],
  exports: [
    MoviesComponent
  ],
  providers: [
    MoviesService
  ]
})
export class MoviesModule { }
