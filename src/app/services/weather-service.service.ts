import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

const environment = {
  production: false,
  weatherApiBaseUrl: 'https://open-weather13.p.rapidapi.com/city/Prague',
  XRapidAPIHostHeaderValue: 'open-weather13.p.rapidapi.com',
  XRapidAPIHostHeaderName: 'X-RapidAPI-Host',
  XRapidAPIKeyHeaderName: 'X-RapidAPI-Key',
  XRapidAPIKeyHeaderValue: 'c5fe693a41mshb08005638495b4bp111617jsn9c097ba6642d'
};

  constructor(private http: HttpClient) { }



  getWeatherData(cityName:string):Observable<WeatherData>{
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl+'/city/'+cityName, {
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyHeaderValue),
    });
   }
}
