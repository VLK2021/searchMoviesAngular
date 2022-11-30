import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { ActorsComponent } from './actors-components/actors/actors.component';
import { ActorComponent } from './actors-components/actor/actor.component';
import {ActorsRoutingModule} from "./actors-routing.module";
import {ActorService} from "./actors-services/actor.service";
import { ActorDetailsComponent } from './actors-components/actor-details/actor-details.component';
import { SearchActorComponent } from './actors-components/search-actor/search-actor.component';



@NgModule({
  declarations: [
    ActorsComponent,
    ActorComponent,
    ActorDetailsComponent,
    SearchActorComponent
  ],
  imports: [
    CommonModule,
    ActorsRoutingModule,
    HttpClientModule,
  ],
  exports: [
    ActorsComponent,
  ],
  providers:[
    ActorService,
  ]
})
export class ActorsModule { }
