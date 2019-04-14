import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpecialityCardComponent } from './speciality-card/speciality-card.component';
import { SpecialityPadComponent } from './speciality-pad/speciality-pad.component';
import { SpecialityPageComponent } from './speciality-page/speciality-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SpecialityCardComponent,
    SpecialityPadComponent,
    SpecialityPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
