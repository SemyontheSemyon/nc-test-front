import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {UserSign} from '../user-sign';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router) { }

  username: string;
  password: string;
  anotherPassword: string;

  failed = false;

  ngOnInit() {
  }

  signUp() {
    if (this.password === this.anotherPassword) {
      this.userService.addUser(new UserSign(this.username, this.password));
      this.router.navigate(['/home']);
    } else { this.failed = true; }
  }

}
