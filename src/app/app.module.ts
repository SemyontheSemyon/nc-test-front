import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {SpecialityPadComponent} from './speciality-pad/speciality-pad.component';
import {SpecialityPageComponent} from './speciality-page/speciality-page.component';
import {LoginComponent} from './login/login.component';
import {HomePageComponent} from './home-page/home-page.component';
import {RegistrationComponent} from './registration/registration.component';
import {ProfileComponent} from './profile/profile.component';
import {ProfileUserComponent} from './profile-user/profile-user.component';
import {TestQuestionHolderComponent} from './test-question-holder/test-question-holder.component';
import {TestStartComponent} from './test-start/test-start.component';
import {TestFinishComponent} from './test-finish/test-finish.component';
import {ProfileHrComponent} from './profile-hr/profile-hr.component';
import {EnrollmentPageComponent} from './enrollment-page/enrollment-page.component';
import {StudentsListComponent} from './students-list/students-list.component';
import {StudentInfoComponent} from './student-info/student-info.component';
import {HeaderComponent} from './header/header.component';
import {EnrollmentsCitySortPipe} from './enrollments-city-sort.pipe';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SpecialityPadComponent,
    SpecialityPageComponent,
    LoginComponent,
    HomePageComponent,
    RegistrationComponent,
    ProfileComponent,
    ProfileUserComponent,
    TestQuestionHolderComponent,
    TestStartComponent,
    TestFinishComponent,
    ProfileHrComponent,
    EnrollmentPageComponent,
    StudentsListComponent,
    StudentInfoComponent,
    HeaderComponent,
    EnrollmentsCitySortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
