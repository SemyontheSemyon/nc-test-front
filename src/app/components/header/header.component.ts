import {Component, OnInit} from '@angular/core';
import {TokenService} from '../../services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'NetCracker Test System';

  private roles: any[];
  private authority: string;

  constructor(private tokenService: TokenService) {
  }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.roles = this.tokenService.getAuthorities();
      this.roles.every(role => {
        if (role.authority === 'ROLE_MANAGER') {
          this.authority = 'admin';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
  }

  logout() {
    this.tokenService.signOut();
    this.authority = '';
  }

}

