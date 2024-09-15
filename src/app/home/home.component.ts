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
  filteredLocationList: HousingLocation[] = [];
  housingService = inject(HousingService)

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList
      this.filteredLocationList = this.housingLocationList
    })
  }

  filterResult(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList
      return
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    )
  }
}
