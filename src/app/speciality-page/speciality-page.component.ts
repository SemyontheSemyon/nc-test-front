import {Component, OnInit, OnChanges} from '@angular/core';
import {SpecialityService} from '../speciality.service';
import {Speciality} from '../speciality';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../user.service';
import {User} from '../user';
import {EnrollmentService} from '../enrollment.service';
import {Enrollment} from '../enrollment';
import {EnrollmentCityTestFormat} from '../enrollment-city-test-format';
import {UserInfo} from '../user-info';
import {TokenService} from '../token.service';

@Component({
  selector: 'app-speciality-page',
  templateUrl: './speciality-page.component.html',
  styleUrls: ['./speciality-page.component.scss']
})
export class SpecialityPageComponent implements OnInit {

  speciality: Speciality;
  userInfo: UserInfo;

  enrollments: Enrollment[];
  cities: string[];

  currentCity: string;

  constructor(private specialityService: SpecialityService,
              private userService: UserService,
              private enrollmentService: EnrollmentService,
              private route: ActivatedRoute,
              private tokenService: TokenService) {
  }

  ngOnInit() {
    this.getEnrollments();
    this.getSpeciality();
    this.getCities();
    this.getUserInfo();
  }

  getSpeciality() {
    const name = this.route.snapshot.paramMap.get('name');
    this.specialityService.getSpeciality(name)
      .subscribe(speciality => this.speciality = speciality);
  }

  getUserInfo() {
    this.userService.getUserInfo().subscribe(userInfo => {
      this.userInfo = userInfo;
      console.log(this.userInfo);
    });
  }

  getCities() {
    this.specialityService.getCities().subscribe(cities => this.cities = cities);
  }

  getEnrollments() {
    this.enrollmentService.getEnrollments().subscribe(enrollments => this.enrollments = enrollments);
  }

  setCity(city: string) {
    this.currentCity = city;
  }

  enroll(enrollment: Enrollment) {
    if (this.userInfo.studentStatus !== 'Applied') {
      this.userInfo.studentStatus = 'Applied';
      this.userInfo.enrollmentId = enrollment.id;
      this.userService.saveUserInfo(this.userInfo).subscribe(data => console.log(data));
      console.log(this.userInfo);
    }
  }
}
