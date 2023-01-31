import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-weather-app';
  WeatherData:any;
  constructor() {}

  ngOnInit() {
    this.WeatherData = {
      
    };
    this.getWeatherData();
  }

  getWeatherData(){

   // let data = JSON.parse('{
    //"min_temp":"3"')
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'c5fe693a41mshb08005638495b4bp111617jsn9c097ba6642d',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
    
   fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Prague', options)
  .then(response => response.json())
  .then(data=>{this.setWeatherData(data);})
      
  }

  setWeatherData(data: any){
    this.WeatherData = data;
    this.WeatherData.min_temp = this.WeatherData.min_temp.toFixed(0);
    this.WeatherData.max_temp = this.WeatherData.max_temp.toFixed(0);
    this.WeatherData.temp = this.WeatherData.temp.toFixed(0);
    this.WeatherData.humidity;
    this.WeatherData.wind_speed;
  }
}
