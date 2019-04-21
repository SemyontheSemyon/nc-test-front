import {Component, Input, OnInit} from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'NetCracker Test System';

  currentUser: User;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    this.currentUser = this.userService.getUser();
  }

}
