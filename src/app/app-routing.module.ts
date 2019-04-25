import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

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
import {ProfileUserComponent} from './profile-user/profile-user.component';
import {ProfileHrComponent} from './profile-hr/profile-hr.component';
import {QuestionCreateComponent} from './question-create/question-create.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'speciality/:name', component: SpecialityPageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'test/start', component: TestStartComponent},
  {path: 'test/inprogress', component: TestQuestionHolderComponent},
  {path: 'test/finish', component: TestFinishComponent},
  {path: 'enrollment/:id', component: EnrollmentPageComponent},
  {path: 'students', component: StudentsListComponent},
  {path: 'student/:id', component: StudentInfoComponent},
  {path: 'profile_user', component: ProfileUserComponent},
  {path: 'profile_hr', component: ProfileHrComponent},
  {path: 'question/new', component: QuestionCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
