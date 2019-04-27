import { Component, OnInit } from '@angular/core';
import {CITIES} from '../cities-mock';
import {EnrollmentService} from '../enrollment.service';
import {CityService} from '../city.service';
import {TokenService} from '../token.service';

@Component({
  selector: 'app-enrollment-create',
  templateUrl: './enrollment-create.component.html',
  styleUrls: ['./enrollment-create.component.css']
})
export class EnrollmentCreateComponent implements OnInit {

  enrollment = {};

  specialities: string[] = ['BA', 'QA', 'DEV'];

  cities: string[] = CITIES;

  constructor(private enrollmentService: EnrollmentService,
              private cityService: CityService,
              private tokenService: TokenService) { }

  ngOnInit() {
    this.tokenService.checkAuthorities('ROLE_MANAGER');
    this.cityService.getCities().subscribe(cities => this.cities = cities);
  }

  onSubmit() {
    console.log(this.enrollment);
    this.enrollmentService.addEnrollment(this.enrollment);
  }

}
