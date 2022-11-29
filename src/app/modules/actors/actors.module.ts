import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { ActorsComponent } from './actors-components/actors/actors.component';
import { ActorComponent } from './actors-components/actor/actor.component';
import {ActorsRoutingModule} from "./actors-routing.module";
import {ActorService} from "./actors-services/actor.service";



@NgModule({
  declarations: [
    ActorsComponent,
    ActorComponent
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
