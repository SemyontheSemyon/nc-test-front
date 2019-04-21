import { Component, OnInit } from '@angular/core';
import {EnrollmentService} from '../enrollment.service';
import {ActivatedRoute, Router} from '@angular/router';
import {EnrollmentCityTestFormat} from '../enrollment-city-test-format';

@Component({
  selector: 'app-enrollment-page',
  templateUrl: './enrollment-page.component.html',
  styleUrls: ['./enrollment-page.component.scss']
})
export class EnrollmentPageComponent implements OnInit {

  ectf: EnrollmentCityTestFormat;

  constructor(private enrollmentService: EnrollmentService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.getEnrollment();
  }

  getEnrollment() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.enrollmentService.getEnrollment(id).subscribe(enrollment => this.ectf = enrollment);
  }
}
