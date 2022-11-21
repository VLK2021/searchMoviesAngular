import { Component, OnInit } from '@angular/core';

import {IMovie} from "../../../../interfaces";
import {MoviesService} from "../../movie-services";


@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})

export class SearchMoviesComponent implements OnInit {
  movies: IMovie[];
  word = '';
  page: number = 1;
  total_pages: number = 500;
  total_results: number;

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
  }

  search(): void {
  }
}
