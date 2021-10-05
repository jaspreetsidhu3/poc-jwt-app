import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tokenGet } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'JWTDemo';
  constructor(private route:Router,private jwtHelper:JwtHelperService){}
  ngOnInit(): void {
   // this.isUserAuthenticated();
  }
//   isUserAuthenticated(){
//     const token: string =localStorage.getItem('jwt')!;
//     if(token && !this.jwtHelper.isTokenExpired(token)){
//       return true;
//     }
//     else{
//       this.route.navigate(["/Login"]);
//       return false;
//     }
//   }
//   logout(){
//     localStorage.removeItem('jwt');
//   }
}

