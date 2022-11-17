import { Component, OnInit } from '@angular/core';

import {SerialsService} from "../../serials-services";
import {ISerial} from "../../../../interfaces";


@Component({
  selector: 'app-serials',
  templateUrl: './serials.component.html',
  styleUrls: ['./serials.component.css']
})

export class SerialsComponent implements OnInit {
  serials: ISerial[];
  page: number = 1;
  total_pages: number = 500;
  total_results: number;

  constructor(private serialService: SerialsService) {
  }

  ngOnInit(): void {
    //@ts-ignore
    this.serialService.getAll(this.page).subscribe(({page, results, total_pages, total_results}) => {
      this.serials = results;
      this.page = page;
      // this.total_pages = total_pages;
      this.total_results = total_results;
      console.log(results);
    })
  }

  goStartOrEnd(page: number) {
    this.page = page;
  }

  goNextOrPrevious(page: number) {
    this.page += page;
    //@ts-ignore
    this.serialService.getAll(this.page).subscribe(({page, results, total_pages, total_results}) => {
      this.serials = results;
      this.page = page;
      // this.total_pages = total_pages;
      this.total_results = total_results;
    })
  }

}
