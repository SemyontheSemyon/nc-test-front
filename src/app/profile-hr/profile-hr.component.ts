import {Component, Input, OnInit} from '@angular/core';
import {User} from '../user';
import {EnrollmentService} from '../enrollment.service';
import {Enrollment} from '../enrollment';
import {EnrollmentCityTestFormat} from '../enrollment-city-test-format';
import {ECTF_MOCK} from '../ectf-mock';

@Component({
  selector: 'app-profile-hr',
  templateUrl: './profile-hr.component.html',
  styleUrls: ['./profile-hr.component.scss']
})
export class ProfileHrComponent implements OnInit {

  constructor(private enrollmentService: EnrollmentService) {
  }

  ectfs: EnrollmentCityTestFormat[] = ECTF_MOCK;

  ngOnInit() {
  }
}
