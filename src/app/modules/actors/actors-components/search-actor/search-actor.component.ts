import {Component, OnInit} from '@angular/core';

import {IActor} from "../../../../interfaces";
import {ActorService} from "../../actors-services/actor.service";
import {BehaviorSubjectService} from "../../../../BehaviorSubject/behavior-subject.service";


@Component({
  selector: 'app-search-actor',
  templateUrl: './search-actor.component.html',
  styleUrls: ['./search-actor.component.css']
})

export class SearchActorComponent implements OnInit {
  actors: IActor[];
  word = '';
  page: number = 1;
  total_pages: number = 500;
  total_results: number;

  constructor(private actorService: ActorService,
              private behaviorSubjectService: BehaviorSubjectService) {
    behaviorSubjectService.storage.subscribe(value => this.word = value);
  }

  ngOnInit(): void {
    //@ts-ignore
    this.actorService.getSearch(this.word, this.page).subscribe(({page, results, total_pages, total_results}) => {
      this.actors = results;
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
    this.actorService.getSearch(this.word, this.page).subscribe(({page, results, total_pages, total_results}) => {
      this.actors = results;
      this.page = page;
      this.total_pages = total_pages;
      this.total_results = total_results;
    });

  }
}
