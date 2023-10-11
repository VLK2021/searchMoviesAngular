import { Component, OnInit } from '@angular/core';

import {SerialsService} from "../../serials-services";
import {IGenre} from "../../../../interfaces";


@Component({
  selector: 'app-genres-of-serials',
  templateUrl: './genres-of-serials.component.html',
  styleUrls: ['./genres-of-serials.component.css']
})

export class GenresOfSerialsComponent implements OnInit {
  genresSerial: IGenre[];

  constructor(private serialService: SerialsService ) { }

  ngOnInit(): void {
    //@ts-ignore
    this.serialService.getAllGenresOfSerials().subscribe(({genres}) => {
      this.genresSerial = genres;
      console.log(genres);
    });
  };

}
