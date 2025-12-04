import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

//This for step G: Generate an API service using HTTPClient
@Injectable({
  providedIn: 'root'
})
export class WorldBankApiService {

  constructor(private http: HttpClient) { }

  getCountryData(countryId: string): Observable<any> {
    const url = `https://api.worldbank.org/v2/country/${countryId}?format=json`;
    return this.http.get<any>(url);
  }
}
