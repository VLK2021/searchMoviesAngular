import {Component, OnInit} from '@angular/core';

import {ISerial} from "../../../../interfaces";
import {BehaviorSubjectService} from "../../../../BehaviorSubject/behavior-subject.service";
import {SerialsService} from "../../serials-services";


@Component({
  selector: 'app-search-serial',
  templateUrl: './search-serial.component.html',
  styleUrls: ['./search-serial.component.css']
})

export class SearchSerialComponent implements OnInit {
  serials: ISerial[];
  word = '';
  page: number = 1;
  total_pages: number = 500;
  total_results: number;

  constructor(private serialService: SerialsService,
              private behaviorSubjectService: BehaviorSubjectService) {
    behaviorSubjectService.storage.subscribe(value => this.word = value);
  }

  ngOnInit(): void {
    //@ts-ignore
    this.serialService.getSearch(this.word, this.page).subscribe(({page, results, total_pages, total_results}) => {
      this.serials = results;
      this.page = page;
      this.total_pages = total_pages;
      this.total_results = total_results;
    });
  }

  goStartOrEnd(page: number) {
    this.page = page;
  }

  goNextOrPrevious(page: number) {
    this.page += page;
    //@ts-ignore
    this.serialService.getSearch(this.word, this.page).subscribe(({page, results, total_pages, total_results}) => {
      this.serials = results;
      this.page = page;
      this.total_pages = total_pages;
      this.total_results = total_results;
    });

  }

}
