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
import { GenresOfSerialsComponent } from './serials-components/genres-of-serials/genres-of-serials.component';
import { GenreOfSerialsComponent } from './serials-components/genre-of-serials/genre-of-serials.component';
import { GenresOfSerialsListComponent } from './serials-components/genres-of-serials-list/genres-of-serials-list.component';
import { GenreOfSerialsListComponent } from './serials-components/genre-of-serials-list/genre-of-serials-list.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    SerialsComponent,
    SerialComponent,
    SerialDetailsComponent,
    SearchSerialComponent,
    GenresOfSerialsComponent,
    GenreOfSerialsComponent,
    GenresOfSerialsListComponent,
    GenreOfSerialsListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SerialsRoutingModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    SerialsComponent
  ],
  providers: [
    SerialsService
  ],
})
export class SerialsModule { }
