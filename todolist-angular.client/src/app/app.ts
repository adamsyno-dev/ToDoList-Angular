import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { retry, delay } from 'rxjs/operators';

export interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF?: number;
  summary?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit {
  public forecasts: WeatherForecast[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getForecasts();
  }


  getForecasts() {
    this.http.get<WeatherForecast[]>('/weatherforecast')
      .pipe(
        // If the server returns a 500 because it's still starting, 
        // wait 2 seconds and try again. Do this up to 3 times.
        retry({ count: 3, delay: 2000 })
      )
      .subscribe({
        next: (result) => {
          this.forecasts = result;
        },
        error: (error) => {
          console.error("Data failed to load after retries:", error);
        }
      });
  }
 

  protected readonly title = signal('todolist-angular.client');
}
