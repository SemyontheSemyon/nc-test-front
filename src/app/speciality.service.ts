import { Injectable } from '@angular/core';

import { Speciality } from './speciality';
import { SPECIALITIES } from './speciality-mock';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpecialityService {

  constructor() { }

  getSpecialities(): Observable<Speciality[]> {
    return of(SPECIALITIES);
  }

  getSpeciality(name: string): Observable<Speciality> {
    return of(SPECIALITIES.find(speciality => speciality.name === name));
  }
}
