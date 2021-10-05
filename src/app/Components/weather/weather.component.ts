import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {

  }
  httpHeader: HttpErrorResponse | undefined;
  getData: any | undefined;
  ngOnInit(): void {

    const token = "Hello Workd";
    
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log(token);
    this.http.get<any>("https://localhost:44363/WeatherForecast", {
      observe: 'response'
      , headers: headers
    }).subscribe(data => {
      console.log(data.body);
      this.getData = data.body;
    }, error => {
      console.log(error);
    })

    // console.log(this.getData);

  }
  catchError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return throwError(err.message || err);
  }
}

