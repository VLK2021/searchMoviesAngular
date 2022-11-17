import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {SerialsComponent} from "./serials-components/serials/serials.component";
import {SerialDetailsComponent} from "./serials-components/serial-details/serial-details.component";


let routes:Routes = [
  {path: '', component: SerialsComponent},
  {path: ':id', component: SerialDetailsComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SerialsRoutingModule { }
