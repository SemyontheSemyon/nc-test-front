import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Enrollment} from './enrollment';
import {ENROLLMENTS} from './enrollment-mock';
import {ECTF_MOCK} from './ectf-mock';
import {EnrollmentCityTestFormat} from './enrollment-city-test-format';
import {HttpClient} from '@angular/common/http';
import {LOCALHOST} from './localhost';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  localhostURL = LOCALHOST;
  enrollmentURL = this.localhostURL + 'api/enrollment/';

  constructor(private http: HttpClient) { }

  getEnrollments(): Observable<Enrollment[]> {
    return of(ENROLLMENTS);
  }

  getEnrollment(id: number): Observable<EnrollmentCityTestFormat> {
    return of(ECTF_MOCK.find(ectf => ectf.enrollment.id === id));
  }

  addEnrollment(enrollment: any) {
    this.http.post(this.enrollmentURL, enrollment).subscribe();
  }

  getAllEnrollments(city: string): Observable<object[]> {
    return this.http.get<object[]>(this.enrollmentURL + city);
  }

  deleteEnrollment(id: number) {
    this.http.delete(this.enrollmentURL + id).subscribe();
  }
}
