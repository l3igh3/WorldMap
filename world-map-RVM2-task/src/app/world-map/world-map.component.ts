import { Component, EventEmitter, Output, ElementRef, AfterViewInit} from '@angular/core';
import {WorldBankApiService} from '../services/world-bank-api.service';
import {CountryInfoComponent} from '../country-info/country-info.component';

@Component({
  selector: 'app-world-map',
  standalone: true,
  imports: [],
  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.css'
})
export class WorldMapComponent implements AfterViewInit {
  @Output() svgIdSelected = new EventEmitter<string>();
  @Output() capitalSelected = new EventEmitter<string>();
  @Output() regionSelected = new EventEmitter<string>();
  @Output() incomeLevelSelected = new EventEmitter<string>();
  @Output() latitudeSelected = new EventEmitter<string>();
  @Output() longitudeSelected = new EventEmitter<string>();


  constructor(
    private elementRef: ElementRef,
    private worldApiService: WorldBankApiService
  ) {}

  //Step F MouseEvent handler to transmit data to component for processing

  ngAfterViewInit(): void {
    const nativeE1 = this.elementRef.nativeElement;

    nativeE1.addEventListener('click', (event: Event) => {
      const target = event.target as HTMLElement;

      if (target && target.id) {
        this.selectCountry(target.id);
      }
    });
  }

  selectCountry(countryId: string): void {
    this.worldApiService.getCountryData(countryId).subscribe({
      next: (data: any) => {
        const country = data[1][0];
        console.log('Fetched country: ', country);

        this.svgIdSelected.emit(country.name);
        this.capitalSelected.emit(country.capitalCity);
        this.regionSelected.emit(country.region.value);
        this.incomeLevelSelected.emit(country.incomeLevel.value);
        this.latitudeSelected.emit(country.latitude);
        this.longitudeSelected.emit(country.longitude);
      },
      error: err => console.error('Error fetching country data: ', err)
    });
  }
}
