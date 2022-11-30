import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {ActorsComponent} from "./actors-components/actors/actors.component";
import {ActorDetailsComponent} from "./actors-components/actor-details/actor-details.component";
import {SearchActorComponent} from "./actors-components/search-actor/search-actor.component";


let routes: Routes = [
  {path: '', component: ActorsComponent},
  {path: 'search', component: SearchActorComponent},
  {path: ':id', component: ActorDetailsComponent},
  {path:'search/:id', component: ActorDetailsComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActorsRoutingModule {
}
