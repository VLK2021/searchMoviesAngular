import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './app-components/header/header.component';
import { FooterComponent } from './app-components/footer/footer.component';
import {AppRoutingModule} from "./app-routing.module";
import { NavigationComponent } from './app-components/navigation/navigation.component';
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './app-components/home/home.component';
import { CarouselComponent } from './app-components/carousel/carousel.component';
import {HttpClientModule} from "@angular/common/http";
import { NotFoundComponent } from './app-components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    HomeComponent,
    CarouselComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
