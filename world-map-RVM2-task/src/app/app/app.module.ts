import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from "../app.component";
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { WorldMapComponent } from "../world-map/world-map.component";
import { CountryInfoComponent } from "../country-info/country-info.component";



@NgModule({
  declarations: [
    AppComponent,
    CountryInfoComponent,
    WorldMapComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
