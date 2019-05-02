import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RegistrationInfo} from '../../dto/registration-info';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: any = {};
  registrationInfo: RegistrationInfo;
  isRegistred = false;
  isRegistrationFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form);

    this.registrationInfo = new RegistrationInfo(
      this.form.email,
      this.form.password
    );

    this.authService.register(this.registrationInfo).subscribe(
      data => {
        console.log(data);
        this.isRegistred = true;
        this.isRegistrationFailed = false;
        this.router.navigate(['login']);
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isRegistrationFailed = true;
      }
    );
  }
}
