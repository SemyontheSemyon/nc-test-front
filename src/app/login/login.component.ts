import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {UserSign} from '../user-sign';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router) { }

  user: User;

  userSign: UserSign = new UserSign('', '');

  failed = false;

  ngOnInit() {
  }

  signIn() {
    this.userService.getUserFromBack(this.userSign).subscribe(user => this.user = user);
    if ( !this.user ) { this.failed = true; } else { this.router.navigate(['/home']); }
    console.log(this.userSign);
    console.log(this.user);
  }
}
