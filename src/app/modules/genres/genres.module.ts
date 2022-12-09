import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenresComponent } from './genres-components/genres/genres.component';
import {GenresRoutingModule} from "./genres-routing.module";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    GenresComponent
  ],
  imports: [
    CommonModule,
    GenresRoutingModule,
    HttpClientModule
  ],
  exports:[
    GenresComponent
  ],
  providers:[

  ]
})
export class GenresModule { }
