import {Component, Input, OnInit} from '@angular/core';
import {EnrollmentService} from '../../services/enrollment.service';
import {CityService} from '../../dto/city.service';

@Component({
  selector: 'app-enrollment-create',
  templateUrl: './enrollment-create.component.html',
  styleUrls: ['./enrollment-create.component.css']
})
export class EnrollmentCreateComponent implements OnInit {

  @Input() enrollment = {};

  specialities: string[] = ['BA', 'QA', 'DEV'];

  cities: string[];

  @Input() editing = false;

  constructor(private enrollmentService: EnrollmentService,
              private cityService: CityService) {
  }

  ngOnInit() {
    this.cityService.getCities().subscribe(cities => this.cities = cities);
  }

  onSubmit() {
    console.log(this.enrollment);
    this.enrollmentService.addEnrollment(this.enrollment);
  }

}
