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
  page: number;
  total_pages: number;
  total_results: number;

  constructor(private movieService: MoviesService) {
  }

  ngOnInit(): void {
    //@ts-ignore
    this.movieService.getAll().subscribe(({page, results, total_pages, total_results}) => {
      this.movies = results;
      this.page = page;
      this.total_pages = total_pages;
      this.total_results = total_results;
    })
  }


}
