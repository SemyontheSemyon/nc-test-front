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

@Component({
  selector: 'app-speciality-page',
  templateUrl: './speciality-page.component.html',
  styleUrls: ['./speciality-page.component.scss']
})
export class SpecialityPageComponent implements OnInit {

  speciality: Speciality;
  user: User;
  userInfo: UserInfo;

  currentCity: string;

  enrollments: Enrollment[];
  cities: string[];

  constructor(private specialityService: SpecialityService,
              private userService: UserService,
              private enrollmentService: EnrollmentService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getEnrollments();
    this.getSpeciality();
    this.getCities();
    this.getUser();
    this.getUserInfo();
  }

  getUser() {
    this.user = this.userService.getUser();
  }

  getSpeciality() {
    const name = this.route.snapshot.paramMap.get('name');
    this.specialityService.getSpeciality(name)
      .subscribe(speciality => this.speciality = speciality);
  }

  getUserInfo() {
    this.userService.getUserInfo().subscribe(userInfo => this.userInfo = userInfo);
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
      this.userService.updateStatus(this.userInfo);
      this.userService.setEnrollment(this.userInfo);
    }
  }
}
