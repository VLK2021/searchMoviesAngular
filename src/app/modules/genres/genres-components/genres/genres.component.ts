import {Component, OnInit} from '@angular/core';

import {IGenres} from "../../../../interfaces";
import {GenresService} from "../../genres-services/genres.service";


@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})

export class GenresComponent implements OnInit {
  genresMovie: IGenres[];

  constructor(private genresService: GenresService) {
  }

  ngOnInit(): void {
    //@ts-ignore
    this.genresService.getAll().subscribe(({genres}) => {
      this.genresMovie = genres;
      console.log(genres);
    });
  }

}
