import { Component, OnInit } from '@angular/core';
import { WeatherService, City } from '../../services/weather.service';

@Component({
  selector: 'app-weather-list',
  standalone: false,
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})
export class WeatherListComponent implements OnInit {
  cities: City[] = []; // Array to hold all cities data
  filteredCities: City[] = []; // Array to hold filtered cities based on search criteria
  noResultsFound: boolean = false; // Flag to display 'no results found' message
  selectedCity?: City; // Currently selected city for detailed view
  temperatureUnit: 'Celsius' | 'Fahrenheit' = 'Celsius'; // Temperature unit toggle (Celsius or Fahrenheit)
  isLoading: boolean = false; // Flag to display loading spinner while fetching data
  query: string = ''; // Search query for filtering cities by name
  selectedDate: string | null = null; // Date for filtering cities by forecast

  constructor(private weatherService: WeatherService) {}

  // ngOnInit is called on component initialization
  ngOnInit(): void {
    this.isLoading = true; // Set loading flag to true to show spinner
    this.weatherService.getAllCities().subscribe(
      (data) => {
        this.cities = data; // Store the fetched cities data
        this.filteredCities = data; // Initialize filtered cities with all cities
        this.noResultsFound = this.filteredCities.length === 0; // Check if there are no results
        this.isLoading = false; // Hide loading spinner once data is fetched
      },
      (error) => {
        console.error('Error fetching cities:', error); // Log error in case of failure
        this.isLoading = false; // Hide loading spinner in case of error
      }
    );
  }

  // Toggle between Celsius and Fahrenheit temperature units
  toggleTemperatureUnit(): void {
    this.temperatureUnit = this.temperatureUnit === 'Celsius' ? 'Fahrenheit' : 'Celsius';
  }

  // Handle search by city, update query and filter cities based on it
  onSearchCity(query: string): void {
    this.query = query.trim(); // Remove any extra spaces from the query
    this.filterCities(); // Re-filter cities based on the updated query
  }

  // Handle search by date, update selected date and filter cities based on it
  onSearchDate(date: string): void {
    this.selectedDate = date; // Save the selected date
    this.filterCities(); // Re-filter cities based on the updated date
  }

  // Filter cities based on the search query and selected date
  filterCities(): void {
    // Format selected date to 'YYYY-MM-DD' for comparison, if provided
    const formattedDate = this.selectedDate
      ? new Date(this.selectedDate).toISOString().split('T')[0]
      : null;

    // Filter cities based on the query and date
    this.filteredCities = this.cities.filter((city) => {
      // Check if the city name matches the query
      const matchesCity = city.city.toLowerCase().includes(this.query.toLowerCase());

      // Check if the city's forecast matches the selected date
      const matchesDate = formattedDate
        ? city.forecast.some((forecast) => forecast.date === formattedDate)
        : true;

      // Return true if both city and date match the criteria
      return matchesCity && matchesDate;
    });

    // Update noResultsFound flag based on filtered cities
    this.noResultsFound = this.filteredCities.length === 0;
  }

  // Get the latest forecast for a given city (sorts forecasts by date)
  getLatestForecast(city: City): any {
    return city.forecast.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
  }

  // Display detailed information for the selected city
  showDetails(city: City): void {
    this.selectedCity = city; // Set the selected city for detailed view
  }
}
