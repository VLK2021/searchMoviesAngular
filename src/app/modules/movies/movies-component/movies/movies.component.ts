import {Component, OnInit} from '@angular/core';

import {MoviesService} from "../../movie-services";
import {IMovie} from "../../../../interfaces";


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
  movies: IMovie[];

  constructor(private movieService: MoviesService) {
  }

  ngOnInit(): void {
    this.movieService.getAll().subscribe(value => console.log(value))
  }

}
