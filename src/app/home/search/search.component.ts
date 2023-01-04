import { Component, OnInit } from '@angular/core';

//service
import { HomeService } from '../home.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {}
}
