import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {SpecialityPadComponent} from './components/speciality-pad/speciality-pad.component';
import {SpecialityPageComponent} from './components/speciality-page/speciality-page.component';
import {LoginComponent} from './components/login/login.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {ProfileComponent} from './components/profile/profile.component';
import {TestQuestionHolderComponent} from './components/test-question-holder/test-question-holder.component';
import {TestStartComponent} from './components/test-start/test-start.component';
import {TestFinishComponent} from './components/test-finish/test-finish.component';
import {StudentsListComponent} from './components/students-list/students-list.component';
import {HeaderComponent} from './components/header/header.component';
import {EnrollmentsCitySortPipe} from './pipes/enrollments-city-sort.pipe';
import {AuthInterceptor} from './auth-interceptor';
import {CollapseModule} from 'ngx-bootstrap';
import {QuestionCreateComponent} from './components/question-create/question-create.component';
import {EnrollmentCreateComponent} from './components/enrollment-create/enrollment-create.component';
import {NgxMaskModule} from 'ngx-mask';
import {QuestionListComponent} from './components/question-list/question-list.component';
import {EnrollmentListComponent} from './components/enrollment-list/enrollment-list.component';
import {AdminComponent} from './components/admin/admin.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {FooterComponent} from './components/footer/footer.component';

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
    StudentsListComponent,
    HeaderComponent,
    QuestionCreateComponent,
    EnrollmentsCitySortPipe,
    EnrollmentCreateComponent,
    QuestionListComponent,
    EnrollmentListComponent,
    AdminComponent,
    NotFoundComponent,
    FooterComponent
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
