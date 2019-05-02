import { Component, OnInit } from '@angular/core';
import {TestService} from '../test.service';
import {TestFormat} from '../test-format';
import {UserInfo} from '../user-info';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-test-start',
  templateUrl: './test-start.component.html',
  styleUrls: ['./test-start.component.scss']
})
export class TestStartComponent implements OnInit {

  testFormat: TestFormat;
  userInfo: UserInfo;

  constructor(private testService: TestService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.getTestFormat();
    this.userService.getUserInfo().subscribe(userInfo => {
      this.userInfo = userInfo;
      console.log(this.userInfo);
      if (userInfo.studentStatus !== 'Applied') {this.router.navigate(['/home']); }
    });
  }

  getTestFormat() {
    this.testService.getTestFormat().subscribe(testFormat => this.testFormat = testFormat);
    console.log(this.testFormat);
  }

}
