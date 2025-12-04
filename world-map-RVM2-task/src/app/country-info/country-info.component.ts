import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import { WorldBankApiService } from "../services/world-bank-api.service";

@Component({
  selector: 'app-country-info',
  standalone: true,
  imports: [],
  templateUrl: './country-info.component.html',
  styleUrl: './country-info.component.css',
})
export class CountryInfoComponent implements OnChanges {
  //adding input properties to use on parent component in app.component.ts
  @Input() countryId!: string;
  @Input() countryCapital!: string;
  @Input() countryRegion!: string;
  @Input() countryIncomeLevel!: string;
  @Input() countryLatitude!: string;
  @Input() countryLongitude!: string;

  countryData: any;

  constructor(
    private api: WorldBankApiService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['countryId'] && this.countryId) {
      this.fetchCountryData(this.countryId);
    }
  }

  fetchCountryData(id: string) {
    this.api.getCountryData(id).subscribe(data => {
      this.countryData = data;
      this.countryCapital = data.capital.capitalCity;
      this.countryRegion = data.region.value;
      this.countryIncomeLevel = data.incomeLevel.value;
      this.countryLatitude = data.latitude;
      this.countryLongitude = data.longitude;
    });
  }
  }
