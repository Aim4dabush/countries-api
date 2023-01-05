//modules
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

//components
import { AppComponent } from './app.component';
import { CountryComponent } from './home/country/country.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './home/search/search.component';
import { RegionComponent } from './home/region/region.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    CountryDetailsComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    RegionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
