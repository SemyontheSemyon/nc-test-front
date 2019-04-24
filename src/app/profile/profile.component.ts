import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {UserInfo} from '../user-info';
import {TokenService} from '../token.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  userInfo: UserInfo;
  testAvailable: boolean;

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() {
    this.userService.getUserInfo().subscribe(userInfo => {
      this.userInfo = userInfo;
      console.log(this.userInfo);

      const d = new Date().valueOf();
      if (this.userInfo.testStart && this.userInfo.testEnd) {
        if (this.userInfo.testStart.valueOf() > d && this.userInfo.testEnd.valueOf() < d) {
          this.testAvailable = true;
        }
      }
    });
  }

  submitUserInfo() {
    if (!this.userInfo.studentStatus) {
      this.userInfo.studentStatus = 'Registred';
    }
    this.userService.saveUserInfo(this.userInfo).subscribe(data => console.log(data));
  }
}
