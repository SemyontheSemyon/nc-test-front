import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecialityPadComponent } from './speciality-pad/speciality-pad.component';
import {SpecialityPageComponent} from './speciality-page/speciality-page.component';

const routes: Routes = [
  {path: 'speciality/:name', component: SpecialityPageComponent},
  {path: 'home', component: SpecialityPadComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
