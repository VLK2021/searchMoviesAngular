import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { SerialsComponent } from './serials-components/serials/serials.component';
import { SerialComponent } from './serials-components/serial/serial.component';
import { SerialDetailsComponent } from './serials-components/serial-details/serial-details.component';
import {SerialsRoutingModule} from "./serials-routing.module";
import {SerialsService} from "./serials-services";
import { SearchSerialComponent } from './serials-components/search-serial/search-serial.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    SerialsComponent,
    SerialComponent,
    SerialDetailsComponent,
    SearchSerialComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SerialsRoutingModule,
    FormsModule
  ],
  exports: [
    SerialsComponent
  ],
  providers: [
    SerialsService
  ],
})
export class SerialsModule { }
