import {Injectable} from '@angular/core';
import {User} from './user';
import {Observable, of} from 'rxjs';
import {USERS} from './user-mock';
import {UserSign} from './user-sign';
import {USER_INFO} from './user-info-mock';
import {UserInfo} from './user-info';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;

  constructor() {
  }

  getUser(): User {
    return this.user;
  }

  getUserFromBack(userSign: UserSign): Observable<User> {
    this.user = USERS.find(user => user.email === userSign.username);
    return of(this.user);
  }

  getStudents(): Observable<User[]> {
    return of(USERS.filter(user => user.authority === 1));
  }

  addUser(userSign: UserSign) {
    console.log('user created' + userSign);
  }

  getUserInfo(): Observable<UserInfo> {
    return of(USER_INFO);
  }

  saveUserInfo(userInfo: UserInfo) {
    console.log('user info saved/updated' + userInfo);
  }

  updateStatus(userInfo: UserInfo) {
    console.log('updated studentStatus to ' + userInfo.studentStatus);
  }

  setEnrollment(userInfo: UserInfo) {
    console.log('user enrolled to enrollment with id ' + userInfo.enrollmentId);
  }
}
