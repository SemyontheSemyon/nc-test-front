import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {UserInfo} from '../user-info';
import {User} from '../user';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.scss']
})
export class ProfileUserComponent implements OnInit {

  constructor(private userService: UserService) { }

  @Input() user: User;

  userInfo: UserInfo;

  pendingTest: number;

  ngOnInit() {
    this.getUserInfo();
    this.getTestStatus();
  }

  getUserInfo() {
    this.userService.getUserInfo().subscribe(userInfo => this.userInfo = userInfo);
  }

  updateUserInfo() {
    this.userService.saveUserInfo(this.userInfo);
  }

  getTestStatus() {
    const d = new Date().valueOf();
    if (this.userInfo.testStart.valueOf() > d) { this.pendingTest = 1;
    } else if ( this.userInfo.testEnd.valueOf() < d) { this.pendingTest = 3;
    } else  { this.pendingTest = 2; }
  }

}
