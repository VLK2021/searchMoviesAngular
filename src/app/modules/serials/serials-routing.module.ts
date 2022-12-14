import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {SerialsComponent} from "./serials-components/serials/serials.component";
import {SerialDetailsComponent} from "./serials-components/serial-details/serial-details.component";
import {SearchSerialComponent} from "./serials-components/search-serial/search-serial.component";
import {GenresOfSerialsComponent} from "./serials-components/genres-of-serials/genres-of-serials.component";
import {GenresOfSerialsListComponent} from "./serials-components/genres-of-serials-list/genres-of-serials-list.component";


let routes:Routes = [
  {path: '', component: SerialsComponent},
  {path:'genresOfSerials', component: GenresOfSerialsComponent, children:[
      {path:'', redirectTo:'/serials/genresOfSerials/16', pathMatch: "full"},
      {path:':id', component: GenresOfSerialsListComponent},
      {path:':id/:id', component: SerialDetailsComponent},
    ]},
  {path: 'search', component: SearchSerialComponent},
  {path: ':id', component: SerialDetailsComponent},
  {path: 'search/:id', component: SerialDetailsComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SerialsRoutingModule { }
