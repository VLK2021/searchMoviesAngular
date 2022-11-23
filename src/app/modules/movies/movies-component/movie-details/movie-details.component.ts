import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';

import {IMovieDetails} from "../../../../interfaces";
import {MoviesService} from "../../movie-services";
import {IMG_URL} from "../../../../constants";
import {YOUTUBE_URL} from "../../../../constants";
import {ITrailer} from "../../../../interfaces/interfaceTrailer/ITrailer";


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent implements OnInit {
  movieDetails: IMovieDetails;
  IMG_URL: string = IMG_URL;
  YOUTUBE_URL: string = YOUTUBE_URL;
  trailers: ITrailer[];


  constructor(private activatedRoute: ActivatedRoute,
              private moviesService: MoviesService,
              private location: Location) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.moviesService.getById(id).subscribe(value => {
        this.movieDetails = value;
      })
    });

    this.activatedRoute.params.subscribe(({id}) => {
      //@ts-ignore
      this.moviesService.getTrailerById(id).subscribe(({results}) => {
        this.trailers = results;
        console.log(results);
      });
    })

  }

  goBack(): void {
    this.location.back();
  }


}
