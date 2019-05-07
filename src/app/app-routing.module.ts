import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SpecialityPageComponent} from './components/speciality-page/speciality-page.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {LoginComponent} from './components/login/login.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {ProfileComponent} from './components/profile/profile.component';
import {TestQuestionHolderComponent} from './components/test-question-holder/test-question-holder.component';
import {TestFinishComponent} from './components/test-finish/test-finish.component';
import {TestStartComponent} from './components/test-start/test-start.component';
import {StudentsListComponent} from './components/students-list/students-list.component';
import {QuestionListComponent} from './components/question-list/question-list.component';
import {EnrollmentListComponent} from './components/enrollment-list/enrollment-list.component';
import {AdminComponent} from './components/admin/admin.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'speciality/:name', component: SpecialityPageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'test/start', component: TestStartComponent},
  {path: 'test/inprogress', component: TestQuestionHolderComponent},
  {path: 'test/finish', component: TestFinishComponent},
  {path: 'students', component: StudentsListComponent},
  {path: 'enrollments', component: EnrollmentListComponent},
  {path: 'questions', component: QuestionListComponent},
  {path: '**', redirectTo: '404'},
  {path: '404', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
