import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { AddTodoComponent } from './Components/todo/add-todo/add-todo.component';
import { TodoComponent } from './Components/todo/show-todo/todo.component';
import { TodoItemComponent } from './Components/todo/todo-item/todo-item.component';
import { WeatherComponent } from './Components/weather/weather.component';
import { AuthGuardGuard } from './Guards/auth-guard.guard';
import { HomeComponent } from './Components/home/home.component';

export function tokenGet() {
 // console.log("return ing -> "+localStorage.getItem("jwt"));
  return ' '+localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WeatherComponent,
    TodoComponent,
    AddTodoComponent,
    TodoItemComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        authScheme:"Bearer",
        tokenGetter: tokenGet,
        throwNoTokenError: true,
        allowedDomains: ["localhost:44363"],
        disallowedRoutes: []
      }
    })
  ],
  providers: [JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
