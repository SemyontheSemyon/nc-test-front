import {Injectable} from '@angular/core';

import {Speciality} from './speciality';
import {SPECIALITIES} from './speciality-mock';
import {Observable, of} from 'rxjs';
import {CITIES} from './cities-mock';

@Injectable({
  providedIn: 'root'
})
export class SpecialityService {

  cities: string[];

  constructor() {
  }

  getSpecialities(): Observable<Speciality[]> {
    return of(SPECIALITIES);
  }

  getSpeciality(name: string): Observable<Speciality> {
    return of(SPECIALITIES.find(speciality => speciality.name === name));
  }

  getCities(): Observable<string[]> {
    return of(CITIES);
  }

}
