import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CountryInfoComponent} from "./country-info/country-info.component";
import {WorldMapComponent} from "./world-map/world-map.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CountryInfoComponent, WorldMapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'world-map-RVM2-task';

  //add properties for selected country data on app.component.html
  selectedSvgId: string = "";
  selectedCapital: string = "";
  selectedRegion: string = "";
  selectedIncomeLevel: string = "";
  selectedLatitude: string = "";
  selectedLongitude: string = "";

  onSvgIdSelected(svgId: string) {
    this.selectedSvgId = svgId;
  }

  onCapitalSelected(capital: string) {
    this.selectedCapital = capital;
  }

  onRegionSelected(region: string) {
    this.selectedRegion = region;
  }

  onIncomeLevelSelected(income: string) {
    this.selectedIncomeLevel = income;
  }
  onLatitudeSelected(latitude: string) {
    this.selectedLatitude = latitude;
  }

  onLongitudeSelected(longitude: string) {
    this.selectedLongitude = longitude;
  }
}
