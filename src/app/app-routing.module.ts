import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SpecialityPageComponent} from './speciality-page/speciality-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {ProfileComponent} from './profile/profile.component';
import {TestQuestionHolderComponent} from './test-question-holder/test-question-holder.component';
import {TestFinishComponent} from './test-finish/test-finish.component';
import {TestStartComponent} from './test-start/test-start.component';
import {EnrollmentPageComponent} from './enrollment-page/enrollment-page.component';
import {StudentsListComponent} from './students-list/students-list.component';
import {StudentInfoComponent} from './student-info/student-info.component';

const routes: Routes = [
  {path: 'speciality/:name', component: SpecialityPageComponent},
  {path: 'home', component: HomePageComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'test/start', component: TestStartComponent},
  {path: 'test/inprogress', component: TestQuestionHolderComponent},
  {path: 'test/finish', component: TestFinishComponent},
  {path: 'enrollment/:id', component: EnrollmentPageComponent},
  {path: 'students', component: StudentsListComponent},
  {path: 'student/:id', component: StudentInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
