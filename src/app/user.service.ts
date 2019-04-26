import {Injectable} from '@angular/core';
import {User} from './user';
import {Observable, of} from 'rxjs';
import {USERS} from './user-mock';
import {UserInfo} from './user-info';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LOCALHOST} from './localhost';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private localhostURL = LOCALHOST;

  private userInfoUrl = LOCALHOST + 'api/profile';

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
