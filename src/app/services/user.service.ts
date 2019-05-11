import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {UserInfo} from '../dto/user-info';
import {HttpClient} from '@angular/common/http';
import {LOCALHOST} from '../localhost';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private localhostURL = LOCALHOST;

  private userInfoUrl = LOCALHOST + 'api/profile';

  constructor(private http: HttpClient) {
  }

  getUserInfo(): Observable<UserInfo> {
    return this.http.get<UserInfo>(this.userInfoUrl);
  }

  getUserInfoByEmail(email: string): Observable<UserInfo> {
    return this.http.get<UserInfo>(this.userInfoUrl + '/' + email);
  }

  saveUserInfo(userInfo: UserInfo) {
    return this.http.post<UserInfo>(this.userInfoUrl, userInfo);
  }
}
