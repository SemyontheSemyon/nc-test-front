import { Injectable } from '@angular/core';
import {User} from "./user";
import {Observable, of} from "rxjs";
import {USER} from "./user-mock";
import {UserSign} from "./user-sign";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;

  constructor() { }

  getUser(): Observable<User> {
    return of(this.user);
  }

  getUserFromBack(userSign: UserSign): Observable<User> {
    this.user = USER;
    return of(this.user);
  }

  addUser(userSign: UserSign) {
    console.log('user created');
  }
}
