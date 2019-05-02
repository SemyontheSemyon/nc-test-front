import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SpecialityPageComponent} from './speciality-page/speciality-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {ProfileComponent} from './profile/profile.component';
import {TestQuestionHolderComponent} from './test-question-holder/test-question-holder.component';
import {TestFinishComponent} from './test-finish/test-finish.component';
import {TestStartComponent} from './test-start/test-start.component';
import {StudentsListComponent} from './students-list/students-list.component';
import {StudentInfoComponent} from './student-info/student-info.component';
import {QuestionListComponent} from './question-list/question-list.component';
import {EnrollmentListComponent} from './enrollment-list/enrollment-list.component';
import {AdminComponent} from './admin/admin.component';

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
  {path: 'student/:id', component: StudentInfoComponent},
  {path: 'enrollments', component: EnrollmentListComponent},
  {path: 'questions', component: QuestionListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
