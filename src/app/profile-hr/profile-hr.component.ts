import {Component, Input, OnInit} from '@angular/core';
import {User} from '../user';
import {EnrollmentService} from '../enrollment.service';
import {Enrollment} from '../enrollment';
import {EnrollmentCityTestFormat} from '../enrollment-city-test-format';

@Component({
  selector: 'app-profile-hr',
  templateUrl: './profile-hr.component.html',
  styleUrls: ['./profile-hr.component.scss']
})
export class ProfileHrComponent implements OnInit {

  constructor(private enrollmentService: EnrollmentService) { }

  @Input() user: User;

  ectfs: EnrollmentCityTestFormat[];

  ngOnInit() {
    this.getEnrollments();
  }

  private getEnrollments() {
    this.enrollmentService.getEnrollments().subscribe(enrollments => this.ectfs = enrollments);
  }
}
