import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpecialityCardComponent } from './speciality-card/speciality-card.component';
import { SpecialityPadComponent } from './speciality-pad/speciality-pad.component';
import { SpecialityPageComponent } from './speciality-page/speciality-page.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationComponent } from './registration/registration.component';
import {FormsModule} from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SpecialityCardComponent,
    SpecialityPadComponent,
    SpecialityPageComponent,
    LoginComponent,
    HomePageComponent,
    RegistrationComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
