import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { HousingLocation } from '../housinglocation';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  housingLocationList: HousingLocation[] = []

  housingService = inject(HousingService)

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations()
  }
}
