import { RouterLink, RouterOutlet } from '@angular/router';
import { HousingLocation } from './../housinglocation';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation
}
