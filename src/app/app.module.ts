import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './app-components/header/header.component';
import { FooterComponent } from './app-components/footer/footer.component';
import {AppRoutingModule} from "./app-routing.module";
import { NavigationComponent } from './app-components/navigation/navigation.component';
import { HomeComponent } from './app-components/home/home.component';
import { CarouselComponent } from './app-components/carousel/carousel.component';
import {HttpClientModule} from "@angular/common/http";
import { NotFoundComponent } from './app-components/not-found/not-found.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


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
    // FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


//{
//  "name": "search-movies-angular",
//  "version": "0.0.0",
//  "scripts": {
//    "ng": "ng",
//    "start": "ng serve",
//    "build": "ng build",
//    "watch": "ng build --watch --configuration development",
//    "test": "ng test"
//  },
//  "private": true,
//  "dependencies": {
//    "@angular/animations": "^14.2.0",
//    "@angular/common": "^14.2.0",
//    "@angular/compiler": "^14.2.0",
//    "@angular/core": "^14.2.0",
//    "@angular/forms": "^14.2.0",
//    "@angular/material": "^15.0.3",
//    "@angular/platform-browser": "^14.2.0",
//    "@angular/platform-browser-dynamic": "^14.2.0",
//    "@angular/router": "^14.2.0",
//    "@fortawesome/angular-fontawesome": "^0.12.0",
//    "@fortawesome/fontawesome-svg-core": "^6.2.1",
//    "@fortawesome/free-brands-svg-icons": "^6.2.1",
//    "@fortawesome/free-solid-svg-icons": "^6.2.1",
//    "angular-cli-ghpages": "^1.0.5",
//    "rxjs": "~7.5.0",
//    "tslib": "^2.3.0",
//    "zone.js": "~0.11.4"
//  },
//  "devDependencies": {
//    "@angular-devkit/build-angular": "^14.2.4",
//    "@angular/cli": "~14.2.4",
//    "@angular/compiler-cli": "^14.2.0",
//    "@types/jasmine": "~4.0.0",
//    "jasmine-core": "~4.3.0",
//    "karma": "~6.4.0",
//    "karma-chrome-launcher": "~3.1.0",
//    "karma-coverage": "~2.2.0",
//    "karma-jasmine": "~5.1.0",
//    "karma-jasmine-html-reporter": "~2.0.0",
//    "typescript": "~4.7.2"
//  }
//}
