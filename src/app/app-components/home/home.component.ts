import { Component, OnInit } from '@angular/core';

import {MoviesService} from "../../modules/movies/movie-services";
import {IMovie} from "../../interfaces";
import { IMG_URL } from '../../constants';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  movies: IMovie[];
  page:number = 1;
  IMG_URL: string = IMG_URL;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    //@ts-ignore
    this.moviesService.getAll(this.page).subscribe(({results}) => {
      this.movies = results;
    })
  }

}
