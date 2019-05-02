import {Component, OnInit} from '@angular/core';
import {SpecialityService} from '../speciality.service';
import {Speciality} from '../speciality';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../user.service';
import {EnrollmentService} from '../enrollment.service';
import {Enrollment} from '../enrollment';
import {UserInfo} from '../user-info';
import {TokenService} from '../token.service';
import {CityService} from '../city.service';

@Component({
  selector: 'app-speciality-page',
  templateUrl: './speciality-page.component.html',
  styleUrls: ['./speciality-page.component.scss']
})
export class SpecialityPageComponent implements OnInit {

  speciality: Speciality;
  userInfo: UserInfo;
  username: string;

  enrollments: Enrollment[];
  cities: string[];

  currentCity: string;

  constructor(private specialityService: SpecialityService,
              private userService: UserService,
              private enrollmentService: EnrollmentService,
              private route: ActivatedRoute,
              private cityService: CityService,
              private tokenService: TokenService) {
  }

  ngOnInit() {
    this.getSpeciality();
    this.getUser();
    this.getUserInfo();
    this.getEnrollments();
    this.getCities();
  }

  getUser() {
    this.username = this.tokenService.getUsername();
  }

  getSpeciality() {
    const name = this.route.snapshot.paramMap.get('name');
    this.specialityService.getSpeciality(name)
      .subscribe(speciality => this.speciality = speciality);
  }

  getUserInfo() {
    if (this.username) {
      this.userService.getUserInfo().subscribe(userInfo => this.userInfo = userInfo);

    }
  }

  getCities() {
    this.cityService.getCities().subscribe(cities => this.cities = cities);
  }

  getEnrollments() {
    this.enrollmentService.getEnrollments().subscribe(enrollments => this.enrollments = enrollments);
  }

  setCity(city: string) {
    this.currentCity = city;
  }

  enroll(enrollment: Enrollment) {
    if (this.userInfo.studentStatus === 'Registred') {
      this.userInfo.studentStatus = 'Applied';
      this.userInfo.enrollmentId = enrollment.id;
      this.userInfo.testStart = enrollment.testStart;
      this.userInfo.testEnd = enrollment.testEnd;
      this.userService.saveUserInfo(this.userInfo).subscribe(data => console.log(data));
    }
  }
}
