import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';

import {IMovieDetails} from "../../../../interfaces";
import {MoviesService} from "../../movie-services";
import {IMG_URL} from "../../../../constants";


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent implements OnInit {
  movieDetails: IMovieDetails;
  IMG_URL: string = IMG_URL;


  constructor(private activatedRoute: ActivatedRoute,
              private moviesService: MoviesService,
              private location: Location) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.moviesService.getById(id).subscribe(value => {
        this.movieDetails = value;
      })
    })
  }

  goBack(): void {
    this.location.back();
  }
}
