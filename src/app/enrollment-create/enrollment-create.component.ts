import { Component, OnInit } from '@angular/core';
import {CITIES} from '../cities-mock';

@Component({
  selector: 'app-enrollment-create',
  templateUrl: './enrollment-create.component.html',
  styleUrls: ['./enrollment-create.component.css']
})
export class EnrollmentCreateComponent implements OnInit {

  enrollment = {};

  specialities: string[] = ['BA', 'QA', 'DEV'];

  cities: string[] = CITIES;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.enrollment);
  }

}
