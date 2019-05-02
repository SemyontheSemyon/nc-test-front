import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {UserInfo} from '../user-info';
import {Router} from '@angular/router';
import {TokenService} from '../token.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router,
              private tokenService: TokenService) {
  }

  userInfo: UserInfo;
  testAvailable: boolean;

  ngOnInit() {
    this.checkUser();
    this.getUserInfo();
  }

  getUserInfo() {
    this.userService.getUserInfo().subscribe(userInfo => {
      this.userInfo = userInfo;
      const d = new Date().valueOf();
      if (new Date(this.userInfo.testStart).valueOf() < d && new Date(this.userInfo.testEnd).valueOf() > d) {
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
    this.userService.saveUserInfo(this.userInfo).subscribe(data => console.log(data));
  }
}
