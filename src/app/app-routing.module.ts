import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { TodoComponent } from './Components/todo/show-todo/todo.component';
import { WeatherComponent } from './Components/weather/weather.component';
import { AuthGuardGuard } from './Guards/auth-guard.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Weather', component: WeatherComponent, canActivate:[AuthGuardGuard] },
  { path: 'Todo', component: TodoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
