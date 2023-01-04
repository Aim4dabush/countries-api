import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { CountryDetailsComponent } from './country-details/country-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':country', component: CountryDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
