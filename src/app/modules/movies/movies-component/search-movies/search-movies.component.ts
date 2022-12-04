import {Component, OnInit} from '@angular/core';

import {IMovie} from "../../../../interfaces";
import {MoviesService} from "../../movie-services";
import {IMG_URL} from "../../../../constants";
import {BehaviorSubjectService} from "../../../../BehaviorSubject/behavior-subject.service";


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
  IMG_URL: string = IMG_URL;

  constructor(private movieService: MoviesService,
              private behaviorSubjectService: BehaviorSubjectService) {
    behaviorSubjectService.storage.subscribe(value => this.word = value);
  }

  ngOnInit(): void {
//@ts-ignore
    this.movieService.getSearch(this.word, this.page).subscribe(({page, results, total_pages, total_results}) => {
      this.movies = results;
      this.page = page;
      this.total_pages = total_pages;
      this.total_results = total_results;
    });
  }

  goStartOrEnd(page: number) {
    this.page = page;
  }

  goNextOrPrevious(page: number) {
    this.page += page;
    //@ts-ignore
    this.movieService.getSearch(this.word, this.page).subscribe(({page, results, total_pages, total_results}) => {
      this.movies = results;
      this.page = page;
      this.total_pages = total_pages;
      this.total_results = total_results;
      console.log(results);
    });
  }
}
