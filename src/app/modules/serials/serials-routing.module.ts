import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {SerialsComponent} from "./serials-components/serials/serials.component";
import {SerialDetailsComponent} from "./serials-components/serial-details/serial-details.component";
import {SearchSerialComponent} from "./serials-components/search-serial/search-serial.component";


let routes:Routes = [
  {path: '', component: SerialsComponent},
  {path: 'search', component: SearchSerialComponent},
  {path: ':id', component: SerialDetailsComponent},
  {path: 'search/:id', component: SerialDetailsComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SerialsRoutingModule { }
