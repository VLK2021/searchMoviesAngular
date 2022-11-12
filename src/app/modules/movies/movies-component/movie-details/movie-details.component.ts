import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IMovieDetails} from "../../../../interfaces";
import {MoviesService} from "../../movie-services";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent implements OnInit {
  movieDetails: IMovieDetails;

  constructor(private activatedRoute: ActivatedRoute,
              private moviesService: MoviesService,
              ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => console.log(value) )
  }

}
