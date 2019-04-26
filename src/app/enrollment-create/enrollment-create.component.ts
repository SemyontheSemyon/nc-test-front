import { Component, OnInit } from '@angular/core';
import {CITIES} from '../cities-mock';
import {EnrollmentService} from '../enrollment.service';

@Component({
  selector: 'app-enrollment-create',
  templateUrl: './enrollment-create.component.html',
  styleUrls: ['./enrollment-create.component.css']
})
export class EnrollmentCreateComponent implements OnInit {

  enrollment = {};

  specialities: string[] = ['BA', 'QA', 'DEV'];

  cities: string[] = CITIES;

  constructor(private enrollmentService: EnrollmentService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.enrollment);
    this.enrollmentService.addEnrollment(this.enrollment);
  }

}
