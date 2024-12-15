// src/app/services/weather.service.ts
import { Injectable } from '@angular/core'; // Importing Angular's Injectable decorator
import { HttpClient } from '@angular/common/http'; // Importing HttpClient to make HTTP requests
import { Observable } from 'rxjs'; // Importing Observable for async handling of HTTP responses

// Define the City interface that will shape the response from the backend
export interface City {
  id: number; // Unique identifier for the city
  city: string; // Name of the city
  forecast: { // Array of weather forecast for the city
    date: string; // Date of the forecast
    temperatureCelsius: number; // Temperature in Celsius
    temperatureFahrenheit: number; // Temperature in Fahrenheit
    humidity: number; // Humidity percentage
  }[];
}

@Injectable({
  providedIn: 'root' // This ensures that the service is provided at the root level (singleton)
})
export class WeatherService {
  private baseUrl = 'http://localhost:4454'; // Base URL for the API endpoints

  constructor(private http: HttpClient) {} // Inject HttpClient into the service

  // Method to fetch all cities and their weather forecasts
  getAllCities(): Observable<City[]> {
    // Making a GET request to the '/forecast' endpoint and returning an Observable of City array
    return this.http.get<City[]>(`${this.baseUrl}/forecast`);
  }

  // Method to fetch a specific city's data by its ID
  getCityById(cityId: number): Observable<City> {
    // Making a GET request to the '/cityForecast/{cityId}' endpoint and returning an Observable of City object
    return this.http.get<City>(`${this.baseUrl}/cityForecast/${cityId}`);
  }

  // Method to fetch a specific city's weather data by the city name
  getCityForecastByName(cityName: string): Observable<City> {
    // Making a GET request to the '/cityForecast/{cityName}' endpoint and returning an Observable of City object
    return this.http.get<City>(`${this.baseUrl}/cityForecast/${cityName}`);
  }
}
