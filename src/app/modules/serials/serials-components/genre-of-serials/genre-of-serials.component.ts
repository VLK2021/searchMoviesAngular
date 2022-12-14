import {Component, Input, OnInit} from '@angular/core';

import {IGenre} from "../../../../interfaces";


@Component({
  selector: 'app-genre-of-serials',
  templateUrl: './genre-of-serials.component.html',
  styleUrls: ['./genre-of-serials.component.css']
})

export class GenreOfSerialsComponent implements OnInit {
  @Input()
  genreSerials: IGenre;

  constructor() {
  }

  ngOnInit(): void {
  }

}
