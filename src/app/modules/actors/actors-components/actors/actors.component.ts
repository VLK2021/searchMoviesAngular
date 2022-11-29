import { Component, OnInit } from '@angular/core';

import {IActor} from "../../../../interfaces/interfaceActor/IActor";
import {ActorService} from "../../actors-services/actor.service";


@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})

export class ActorsComponent implements OnInit {
  actors: IActor[];
  page: number = 1;
  total_pages: number = 500;
  total_results: number;

  constructor(private actorService:ActorService) { }

  ngOnInit(): void {
    //@ts-ignore
    this.actorService.getAll(this.page).subscribe(({page, results, total_pages, total_results}) => {
      this.actors = results;
      console.log(results);
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
    this.actorService.getAll(this.page).subscribe(({page, results, total_pages, total_results}) => {
      this.actors = results;
      this.page = page;
      this.total_pages = total_pages;
      this.total_results = total_results;
    })
  }

}
