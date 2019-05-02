import {Injectable} from '@angular/core';

import {Speciality} from './speciality';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {LOCALHOST} from './localhost';

@Injectable({
  providedIn: 'root'
})
export class SpecialityService {

  localhost = LOCALHOST;

  specialityURL = this.localhost + 'api/speciality/';
  citiesURL = this.localhost + 'api/cities';

  constructor(private http: HttpClient) {
  }

  getSpecialities(): Observable<Speciality[]> {
    return this.http.get<Speciality[]>(this.specialityURL + 'all');
  }

  getSpeciality(name: string): Observable<Speciality> {
    return this.http.get<Speciality>(this.specialityURL + name);
  }

  getCities(): Observable<string[]> {
    return this.http.get<string[]>(this.citiesURL + name);
  }

}
