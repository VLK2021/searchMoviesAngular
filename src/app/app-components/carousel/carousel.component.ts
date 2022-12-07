import {Component, OnInit} from '@angular/core';

import {IMovie} from "../../interfaces";
import {MoviesService} from "../../modules/movies/movie-services";
import {IMG_URL} from "../../constants";


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit {
  movies: IMovie[];
  page: number = 1;
  IMG_URL: string = IMG_URL;
  slidePosition: number = 0;

  slides: any = document.getElementsByClassName('carousel_item');
  totalSlides = this.slides.length;


  constructor(private movieService: MoviesService) {
  }


  ngOnInit(): void {
    //@ts-ignore
    this.movieService.getAll(this.page).subscribe(({results}) => {
      this.movies = results;
      console.log(results);
    })
  }


  updateSlidePosition() {
    for (let slide of this.slides) {
      slide.classList.remove('carousel_item-visible')
    }
  }


  nextSlide() {
    this.updateSlidePosition()

    if (this.slidePosition === this.slides.length){
      this.slidePosition = 0;
    } else {
      this.slidePosition++;
    }
  }

  prevSlide() {
    if (this.slidePosition === 0){
      this.slidePosition = 0;
    } else {
      this.slidePosition--;
    }
  }
}
