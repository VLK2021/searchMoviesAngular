import {Component, Input, OnInit} from '@angular/core';

import {IMovie} from "../../../../interfaces";
import {IMG_URL} from "../../../../constants";


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent implements OnInit {
  IMG_URL: string = IMG_URL;


  @Input()
  movie: IMovie

  constructor() {
  }

  ngOnInit(): void {
  };

  // setNewClass(vote: number): string {
  //   if (vote >= 8) {
  //     return 'green'
  //   } else if (vote >= 6) {
  //     return 'orange'
  //   } else {
  //     return 'red'
  //   }
  // };

}
