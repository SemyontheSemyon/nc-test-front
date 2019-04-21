import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Enrollment} from './enrollment';
import {ENROLLMENTS} from './enrollment-mock';
import {ECTF_MOCK} from './ectf-mock';
import {EnrollmentCityTestFormat} from './enrollment-city-test-format';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  constructor() { }

  getEnrollments(): Observable<Enrollment[]> {
    return of(ENROLLMENTS);
  }

  getEnrollment(id: number): Observable<EnrollmentCityTestFormat> {
    return of(ECTF_MOCK.find(ectf => ectf.enrollment.id === id));
  }
}
