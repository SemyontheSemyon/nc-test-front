import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecialityPadComponent } from './speciality-pad/speciality-pad.component';
import {SpecialityPageComponent} from './speciality-page/speciality-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';

const routes: Routes = [
  {path: 'speciality/:name', component: SpecialityPageComponent},
  {path: 'home', component: HomePageComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
