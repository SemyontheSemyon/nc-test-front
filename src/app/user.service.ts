import {Injectable} from '@angular/core';
import {User} from './user';
import {Observable, of} from 'rxjs';
import {USERS} from './user-mock';
import {UserSign} from './user-sign';
import {USER_INFO} from './user-info-mock';
import {UserInfo} from './user-info';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginInfo} from './login-info';
import {JwtResponse} from './jwt-response';
import {TokenService} from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userInfoUrl = 'http://localhost:8080/api/profile';

  constructor(private http: HttpClient) {
  }

  getStudents(): Observable<User[]> {
    return of(USERS.filter(user => user.authority === 1));
  }

  getUserInfo(): Observable<UserInfo> {
    return this.http.get<UserInfo>(this.userInfoUrl);
  }

  saveUserInfo(userInfo: UserInfo) {
    return this.http.post<UserInfo>(this.userInfoUrl, userInfo);
  }
}
