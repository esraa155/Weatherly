import { TestBed } from '@angular/core/testing';
import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let service: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

export interface Forecast {
  date: string;
  temperatureCelsius: number;
  temperatureFahrenheit: number;
  humidity: number;
  weatherCondition: string;
  icon: string; // أضف هذه الخاصية
}

export interface CityWeather {
  city: string;
  forecast: Forecast[];
}