import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {SpecialityPadComponent} from './speciality-pad/speciality-pad.component';
import {SpecialityPageComponent} from './speciality-page/speciality-page.component';
import {LoginComponent} from './login/login.component';
import {HomePageComponent} from './home-page/home-page.component';
import {RegistrationComponent} from './registration/registration.component';
import {ProfileComponent} from './profile/profile.component';
import {TestQuestionHolderComponent} from './test-question-holder/test-question-holder.component';
import {TestStartComponent} from './test-start/test-start.component';
import {TestFinishComponent} from './test-finish/test-finish.component';
import {EnrollmentPageComponent} from './enrollment-page/enrollment-page.component';
import {StudentsListComponent} from './students-list/students-list.component';
import {StudentInfoComponent} from './student-info/student-info.component';
import {HeaderComponent} from './header/header.component';
import {EnrollmentsCitySortPipe} from './enrollments-city-sort.pipe';
import {AuthInterceptor} from './auth-interceptor';
import {CollapseModule} from 'ngx-bootstrap';
import {QuestionCreateComponent} from './question-create/question-create.component';
import {EnrollmentCreateComponent} from './enrollment-create/enrollment-create.component';
import {NgxMaskModule} from 'ngx-mask';
import {QuestionListComponent} from './question-list/question-list.component';
import {EnrollmentListComponent} from './enrollment-list/enrollment-list.component';
import {AdminComponent} from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    SpecialityPadComponent,
    SpecialityPageComponent,
    LoginComponent,
    HomePageComponent,
    RegistrationComponent,
    ProfileComponent,
    TestQuestionHolderComponent,
    TestStartComponent,
    TestFinishComponent,
    EnrollmentPageComponent,
    StudentsListComponent,
    StudentInfoComponent,
    HeaderComponent,
    QuestionCreateComponent,
    EnrollmentsCitySortPipe,
    EnrollmentCreateComponent,
    QuestionListComponent,
    EnrollmentListComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CollapseModule,
    NgxMaskModule.forRoot()
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
