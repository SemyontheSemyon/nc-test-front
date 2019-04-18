import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';
import {UserInfo} from '../user-info';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router) { }

  user: User;

  ngOnInit() {
    this.getUser();
    if (!this.user) {this.router.navigate(['/login']); }
  }

  getUser() {
    this.user = this.userService.getUser();
  }

}
