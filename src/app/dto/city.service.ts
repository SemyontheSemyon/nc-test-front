import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LOCALHOST} from '../localhost';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private localhostURL = LOCALHOST;
  private cityURL = this.localhostURL + 'api/cities';

  constructor(private httpClient: HttpClient) {
  }

  getCities(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.cityURL);
  }

}
