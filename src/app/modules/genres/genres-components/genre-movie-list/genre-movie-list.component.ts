import {Component, Input, OnInit} from '@angular/core';

import {IMovie} from "../../../../interfaces";
import {IMG_URL} from "../../../../constants";


@Component({
  selector: 'app-genre-movie-list',
  templateUrl: './genre-movie-list.component.html',
  styleUrls: ['./genre-movie-list.component.css']
})

export class GenreMovieListComponent implements OnInit {
  IMG_URL: string = IMG_URL;

  @Input()
  genreMovie: IMovie;

  constructor() {
  }

  ngOnInit(): void {
  }

}
