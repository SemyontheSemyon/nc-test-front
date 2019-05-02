import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {LOCALHOST} from './localhost';
import {Enrollment} from './enrollment';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  localhostURL = LOCALHOST;
  enrollmentURL = this.localhostURL + 'api/enrollment/';

  constructor(private http: HttpClient) { }

  getEnrollments(): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(this.enrollmentURL + 'active');
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
