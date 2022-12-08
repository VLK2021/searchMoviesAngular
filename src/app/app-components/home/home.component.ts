import { Component, OnInit } from '@angular/core';

import {MoviesService} from "../../modules/movies/movie-services";
import {IMovie, ISerial} from "../../interfaces";
import { IMG_URL } from '../../constants';
import {SerialsService} from "../../modules/serials/serials-services";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  movies: IMovie[];
  serials: ISerial[];
  page:number = 1;
  IMG_URL: string = IMG_URL;

  constructor(private moviesService: MoviesService,
              private serialsService: SerialsService) { }

  ngOnInit(): void {
    //@ts-ignore
    this.moviesService.getAll(this.page).subscribe(({results}) => {
      this.movies = results;
    })
    //@ts-ignore
    this.serialsService.getAll(this.page).subscribe(({results}) => {
      this.serials = results;
    })
  }

}
