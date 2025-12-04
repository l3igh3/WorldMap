import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent} from "./app.component";
import { WorldMapComponent} from "./world-map/world-map.component";
import { CountryInfoComponent } from "./country-info/country-info.component";
import { AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    WorldMapComponent,
    CountryInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
