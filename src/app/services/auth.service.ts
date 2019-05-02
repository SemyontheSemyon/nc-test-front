import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginInfo} from '../dto/login-info';
import {RegistrationInfo} from '../dto/registration-info';
import {JwtResponse} from '../dto/jwt-response';
import {LOCALHOST} from '../localhost';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private localhostURL = LOCALHOST;

  private loginUrl = this.localhostURL + 'api/auth/login';
  private registerUrl = this.localhostURL + 'api/auth/registration';

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
