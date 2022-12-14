import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {GenresService} from "../../genres-services/genres.service";
import {IMovie} from "../../../../interfaces";


@Component({
  selector: 'app-genres-movies-list',
  templateUrl: './genres-movies-list.component.html',
  styleUrls: ['./genres-movies-list.component.css']
})

export class GenresMoviesListComponent implements OnInit {
  genresMovie: IMovie[];
  page: number = 1;
  total_pages: number = 500;
  total_results: number;

  constructor(private genresMovieService: GenresService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      //@ts-ignore
      this.genresMovieService.getByGenre(+id, this.page).subscribe(({page, results, total_pages, total_results}) => {
        this.genresMovie = results;
        this.page = page;
        this.total_pages = total_pages;
        this.total_results = total_results;
      })
    });
  };

  goStartOrEnd(page: number) {
    this.page = page;
  };

  goNextOrPrevious(page: number) {
    this.page += page;
    this.activatedRoute.params.subscribe(({id}) => {
      //@ts-ignore
      this.genresMovieService.getByGenre(id, this.page).subscribe(({page, results, total_pages, total_results}) => {
        this.genresMovie = results;
        this.page = page;
        this.total_pages = total_pages;
        this.total_results = total_results;
      })
    });

  }
}
