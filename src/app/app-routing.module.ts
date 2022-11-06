import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {HeaderComponent} from "./app-components/header/header.component";


let routes:Routes = [
  {path: '', component: HeaderComponent},
  {path:'movies', loadChildren:() => import('./modules/movies/movies.module').then(m=>m.MoviesModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
