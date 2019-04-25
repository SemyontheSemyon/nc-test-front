import { Component, OnInit } from '@angular/core';
import {UserInfo} from '../user-info';
import {UserService} from '../user.service';
import {TestService} from '../test.service';
import {Question} from '../question';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.scss']
})
export class StudentInfoComponent implements OnInit {

  userInfo: UserInfo;

  testInfo: Question[] = [];

  constructor(private userService: UserService,
              private testService: TestService) { }

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() {
    this.userService.getUserInfo().subscribe(userInfo => this.userInfo = userInfo);
  }

  getTestInfo() {

  }

}
