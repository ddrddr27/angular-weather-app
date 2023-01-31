import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http: HttpClient) { }
  
  		// API Call
      let headers = new HttpHeaders({
        'x-rapidapi-host': 'foreca-weather.p.rapidapi.com',
        'x-rapidapi-key': 'c5fe693a41mshb08005638495b4bp111617jsn9c097ba6642d'
      });
      this.http
        .get<any>('https://foreca-weather.p.rapidapi.com/location/search/prague?lang=en&country=cz', {
          headers: headers
        })
        .subscribe(data => {
          console.log(data);
        });

  

}
