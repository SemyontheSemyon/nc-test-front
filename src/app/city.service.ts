import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private cityUrl = 'http://localhost:8080/api/city';

  constructor(private httpClient: HttpClient) { }

  getCities(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.cityUrl);
  }

}
