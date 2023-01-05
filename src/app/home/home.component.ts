import { Component, OnInit } from '@angular/core';
import { Country } from '../country.module';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  countries: Country[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.homeService.getCountries();
    this.homeService.countryChanges.subscribe((data: Country[]) => {
      this.countries = data;
      console.log(this.countries);
    });
  }
}
