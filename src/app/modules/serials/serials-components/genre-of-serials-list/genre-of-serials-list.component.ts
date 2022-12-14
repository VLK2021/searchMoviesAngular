import {Component, Input, OnInit} from '@angular/core';

import {ISerial} from "../../../../interfaces";
import {IMG_URL} from "../../../../constants";


@Component({
  selector: 'app-genre-of-serials-list',
  templateUrl: './genre-of-serials-list.component.html',
  styleUrls: ['./genre-of-serials-list.component.css']
})

export class GenreOfSerialsListComponent implements OnInit {
  IMG_URL: string = IMG_URL;

  @Input()
  genreOfSerials: ISerial;

  constructor() {
  }

  ngOnInit(): void {
  }

}
