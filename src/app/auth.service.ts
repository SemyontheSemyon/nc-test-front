import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginInfo} from './login-info';
import {RegistrationInfo} from './registration-info';
import {JwtResponse} from './jwt-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8080/api/auth/login';
  private registerUrl = 'http://localhost:8080/api/auth/registration';

  constructor(private http: HttpClient) {
  }

  login(loginInfo: LoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, loginInfo, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
  }

  register(info: RegistrationInfo): Observable<string> {
    return this.http.post<string>(this.registerUrl, info, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
  }
}
