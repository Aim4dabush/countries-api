import { Component, Input, OnInit } from '@angular/core';

import { Country } from '../../country.module';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  @Input() info!: Country;

  constructor() {}

  ngOnInit() {}
}
