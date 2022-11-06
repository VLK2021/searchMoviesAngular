import {Component, OnInit} from '@angular/core';

import {MoviesService} from "../../movie-services";
import {IMovie} from "../../../../interfaces";


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
  movies: any;

  constructor(private movieService: MoviesService) {
  }
  ngOnInit(): void {
    //@ts-ignore
    this.movieService.getAll().subscribe(({results})=> this.movies = results)
  }

}
