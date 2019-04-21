import { Component, OnInit } from '@angular/core';
import {UserInfo} from '../user-info';
import {UserService} from '../user.service';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.scss']
})
export class StudentInfoComponent implements OnInit {

  userInfo: UserInfo;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() {
    this.userService.getUserInfo().subscribe(userInfo => this.userInfo = userInfo);
  }

}
