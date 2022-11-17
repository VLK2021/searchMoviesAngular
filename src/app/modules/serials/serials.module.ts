import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { SerialsComponent } from './serials-components/serials/serials.component';
import { SerialComponent } from './serials-components/serial/serial.component';
import { SerialDetailsComponent } from './serials-components/serial-details/serial-details.component';
import {SerialsRoutingModule} from "./serials-routing.module";
import {SerialsService} from "./serials-services";


@NgModule({
  declarations: [
    SerialsComponent,
    SerialComponent,
    SerialDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SerialsRoutingModule
  ],
  exports: [
    SerialsComponent
  ],
  providers: [
    SerialsService
  ],
})
export class SerialsModule { }
