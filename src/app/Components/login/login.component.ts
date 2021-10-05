import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { Subscriber, Subscription } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  sub: Subscription | undefined;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }


  getData(form: NgForm) {
    const credentials = {
      'userName': form.value.user,
      'password': form.value.password
    }
    //this.sub = 
    this.http.post<any>("https://localhost:44363/api/Auth/login", credentials)
      .subscribe(data => {
        const token = data.token;
        localStorage.setItem("jwt", token);
       // console.log(token);
        alert("Done");
        this.router.navigate(["/"]);
      },
        err => {
          alert("Failed");
        }
      )
  }
}
