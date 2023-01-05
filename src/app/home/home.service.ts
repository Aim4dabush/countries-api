import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

//model
import { Country } from '../country.module';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  countries: Country[] = [];
  countryChanges = new Subject<Country[]>();

  constructor(private http: HttpClient) {}

  getCountries() {
    this.http
      .get<Country[]>(
        'https://restcountries.com/v2/all?fields=borders,capital,currencies,flag,languages,name,nativeName,population,region,subregion,topLevelDomain'
      )
      .subscribe((data) => {
        this.countries = data;
        this.countryChanges.next([...this.countries]);
      });
  }
}
