import { Component, Input } from '@angular/core';
import { City } from '../../services/weather.service'; // Importing the City interface from the weather service

@Component({
  selector: 'app-city-details', // The component's selector that will be used in the HTML to render this component
  standalone: false, // Indicates that this component is not standalone and will likely be part of a module
  templateUrl: './city-details.component.html', // Path to the component's HTML template
  styleUrls: ['./city-details.component.scss'] // Path to the component's styles
})
export class CityDetailsComponent {
  // Using @Input decorators to allow data to be passed into the component
  @Input() city?: City; // City object that holds the data about the city, passed from the parent component
  @Input() temperatureUnit: 'Celsius' | 'Fahrenheit' = 'Celsius'; // Temperature unit that defaults to 'Celsius'

  /**
   * Method to return the temperature in the selected unit (Celsius or Fahrenheit).
   * 
   * @param temperatureCelsius - The temperature in Celsius.
   * @param temperatureFahrenheit - The temperature in Fahrenheit.
   * @returns The temperature in the unit selected by the user.
   */
  getTemperature(temperatureCelsius: number, temperatureFahrenheit: number): number {
    // Check if the selected temperature unit is Celsius or Fahrenheit and return the respective value
    return this.temperatureUnit === 'Celsius' ? temperatureCelsius : temperatureFahrenheit;
  }
}
