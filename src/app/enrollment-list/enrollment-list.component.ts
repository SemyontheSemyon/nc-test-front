import { Component, OnInit } from '@angular/core';
import {EnrollmentService} from '../enrollment.service';
import {CityService} from '../city.service';
import {TokenService} from '../token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-enrollment-list',
  templateUrl: './enrollment-list.component.html',
  styleUrls: ['./enrollment-list.component.css']
})
export class EnrollmentListComponent implements OnInit {

  selectedCity: string;

  cities: string[] = [''];

  enrollments = [];

  constructor(private enrollmentService: EnrollmentService,
              private cityService: CityService,
              private tokenService: TokenService) { }

  ngOnInit() {
    this.tokenService.checkAuthorities('ROLE_MANAGER');
    this.cityService.getCities().subscribe(cities => this.cities = cities);
  }

  getEnrollments(selectedCity: string) {
    this.enrollmentService.getAllEnrollments(selectedCity).subscribe(enrollments => this.enrollments = enrollments);
  }

  removeEnrollment(enrollmentId: number) {
    this.enrollments = this.enrollments.filter(enrollment => enrollment.id !== enrollmentId);
    this.enrollmentService.deleteEnrollment(enrollmentId);
  }



}
