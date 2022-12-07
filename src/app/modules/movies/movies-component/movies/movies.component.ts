import {Component, OnInit} from '@angular/core';

import {MoviesService} from "../../movie-services";
import {IMovie} from "../../../../interfaces";
import {BehaviorSubjectService} from "../../../../BehaviorSubject/behavior-subject.service";


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
  movies: IMovie[];
  word = '';
  page: number = 1;
  total_pages: number = 500;
  total_results: number;


  constructor(private movieService: MoviesService,
              private behaviorSubjectService: BehaviorSubjectService) {
  };

  ngOnInit(): void {
    //@ts-ignore
    this.movieService.getAll(this.page).subscribe(({page, results, total_pages, total_results}) => {
      this.movies = results;
      this.page = page;
      this.total_pages = total_pages;
      this.total_results = total_results;
    });
  };

  goStartOrEnd(page: number) {
    this.page = page;
  };

  goNextOrPrevious(page: number) {
    this.page += page;
    //@ts-ignore
    this.movieService.getAll(this.page).subscribe(({page, results, total_pages, total_results}) => {
      this.movies = results;
      this.page = page;
      this.total_pages = total_pages;
      this.total_results = total_results;
    });
  };

  search(): void {
    this.behaviorSubjectService.storage.next(this.word);
  };

  sortByVoteAverage() {
    this.movies = this.movies.slice().sort((a, b) => b.vote_average - a.vote_average);
  };

  sortByName() {
    this.movies = this.movies.slice().sort((a, b) => a.title > b.title ? 1 : -1);
  };

  sortByDate() {
    this.movies = this.movies.slice().sort((a, b) => b.release_date > a.release_date ? 1 : -1);
  };


}
