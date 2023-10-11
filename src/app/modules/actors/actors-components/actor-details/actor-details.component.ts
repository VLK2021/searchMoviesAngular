import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";

import {ActorService} from "../../actors-services/actor.service";
import {IActorDetails} from "../../../../interfaces/interfaceActor/IActorDetails";
import {IMG_URL} from "../../../../constants";


@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.css']
})

export class ActorDetailsComponent implements OnInit {
  actorDetails: IActorDetails;
  IMG_URL: string = IMG_URL;

  constructor(private actorService: ActorService,
              private activatedRoute: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.actorService.getById(id).subscribe(value => {
        this.actorDetails = value;
      })
    })
  }

  goBack(): void {
    this.location.back();
  }

}
