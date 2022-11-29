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
    this.actorService.getAll(this.page).subscribe(value => console.log(value));
  }

}
