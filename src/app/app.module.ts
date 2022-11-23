import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './app-components/header/header.component';
import { FooterComponent } from './app-components/footer/footer.component';
import {AppRoutingModule} from "./app-routing.module";
import { NavigationComponent } from './app-components/navigation/navigation.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
