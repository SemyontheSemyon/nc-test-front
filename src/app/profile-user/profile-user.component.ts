import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {UserInfo} from '../user-info';
import {User} from '../user';
import {CITIES} from '../cities-mock';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.scss']
})
export class ProfileUserComponent implements OnInit {

  constructor() { }

  userInfo = {};
  cities: string[] = CITIES;
  specialities: string[];

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.userInfo);
  }

  getUserInfo() {

  }


}
