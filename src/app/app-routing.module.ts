import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./app-components/home/home.component";
import {NotFoundComponent} from "./app-components/not-found/not-found.component";


let routes:Routes = [
  {path: '', redirectTo: 'home', pathMatch: "full"},
  {path: 'home', component: HomeComponent},
  {path:'movies', loadChildren:() => import('./modules/movies/movies.module').then(m=>m.MoviesModule)},
  {path:'serials', loadChildren:() => import('./modules/serials/serials.module').then(m=>m.SerialsModule)},
  {path:'actor', loadChildren:() => import('./modules/actors/actors.module').then(m=>m.ActorsModule)},
  {path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
