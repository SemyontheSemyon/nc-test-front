import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {TokenService} from '../../services/token.service';
import {LoginInfo} from '../../dto/login-info';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: any[] = [];
  private loginInfo: LoginInfo;

  constructor(private authService: AuthService, private tokenService: TokenService, private router: Router) {
  }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onSubmit() {
    console.log(this.form);

    this.loginInfo = new LoginInfo(
      this.form.email,
      this.form.password
    );

    this.authService.login(this.loginInfo).subscribe(
      data => {
        console.log(data);
        this.tokenService.saveToken(data.token);
        this.tokenService.saveUsername(data.username);
        this.tokenService.saveAuthorities(data.authorities);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenService.getAuthorities();
        console.log(this.roles[0]);
        console.log(this.roles.includes('ROLE_USER'));
        if (this.roles[0].authority === 'ROLE_USER') {
          this.router.navigate(['profile']);
        } else if (this.roles[0].authority === 'ROLE_MANAGER') {
          this.router.navigate(['admin']);
        } else {
          this.router.navigate(['home']);
        }
      },
      error => {
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }
}
