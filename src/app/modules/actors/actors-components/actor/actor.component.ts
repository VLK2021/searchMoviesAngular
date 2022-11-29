import {Component, Input, OnInit} from '@angular/core';

import {IActor} from "../../../../interfaces/interfaceActor/IActor";
import {IMG_URL} from "../../../../constants";


@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})

export class ActorComponent implements OnInit {
  IMG_URL:string = IMG_URL;

  @Input()
  actor: IActor;


  constructor() { }

  ngOnInit(): void {
  }

}
