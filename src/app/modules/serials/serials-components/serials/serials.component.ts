import {Component, OnInit} from '@angular/core';

import {SerialsService} from "../../serials-services";
import {ISerial} from "../../../../interfaces";
import {BehaviorSubjectService} from "../../../../BehaviorSubject/behavior-subject.service";


@Component({
  selector: 'app-serials',
  templateUrl: './serials.component.html',
  styleUrls: ['./serials.component.css']
})

export class SerialsComponent implements OnInit {
  serials: ISerial[];
  word = '';
  page: number = 1;
  total_pages: number = 500;
  total_results: number;

  constructor(private serialService: SerialsService,
              private behaviorSubjectService: BehaviorSubjectService) {
  }

  ngOnInit(): void {
    //@ts-ignore
    this.serialService.getAll(this.page).subscribe(({page, results, total_pages, total_results}) => {
      this.serials = results;
      this.page = page;
      this.total_pages = total_pages;
      this.total_results = total_results;
    });
  };

  goStartOrEnd(page: number) {
    this.page = page;
  };

  goNextOrPrevious(page: number) {
    this.page += page;
    //@ts-ignore
    this.serialService.getAll(this.page).subscribe(({page, results, total_pages, total_results}) => {
      this.serials = results;
      this.page = page;
      this.total_pages = total_pages;
      this.total_results = total_results;
    });
  };

  search() {
    this.behaviorSubjectService.storage.next(this.word);
  };

  sortByAverage() {
    this.serials = this.serials.slice().sort((a,b)=>b.vote_average - a.vote_average);
  };


  sortByDate() {
    this.serials = this.serials.slice().sort((a, b) => b.first_air_date> a.first_air_date ? 1 : -1);
  }

  sortByName() {
    this.serials = this.serials.slice().sort((a, b) => a.original_name > b.original_name ? 1 : -1);
  }
}
