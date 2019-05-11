import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {UserInfo} from '../../dto/user-info';
import {Router} from '@angular/router';
import {TokenService} from '../../services/token.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userInfo: UserInfo;
  testAvailable: boolean;
  showMsg: boolean = false;
  grades: number[] = [1, 2, 3, 4, 5, 6];

  constructor(private userService: UserService,
              private router: Router,
              private tokenService: TokenService) {
  }

  ngOnInit() {
    this.checkUser();
    this.getUserInfo();
  }

  getUserInfo() {
    this.userService.getUserInfo().subscribe(userInfo => {
      this.userInfo = userInfo;
      const d = new Date().valueOf();
      if (new Date(this.userInfo.testStart).valueOf() < d && new Date(this.userInfo.testEnd).valueOf() > d && userInfo.studentStatus !== 'TestWritten') {
        this.testAvailable = true;
      }
    });
  }

  checkUser() {
    if (!this.tokenService.getToken()) {
      this.router.navigate(['home']);
    }
  }

  submitUserInfo() {
    if (!this.userInfo.studentStatus) {
      this.userInfo.studentStatus = 'Registred';
    }
    this.userService.saveUserInfo(this.userInfo).subscribe();
    this.showMsg = true;
  }
}
