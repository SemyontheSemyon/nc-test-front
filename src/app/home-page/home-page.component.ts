import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';
import {ENROLLMENTS} from '../enrollment-mock';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private userService: UserService) { }

  user: User;

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.user = this.userService.getUser();
  }

}
