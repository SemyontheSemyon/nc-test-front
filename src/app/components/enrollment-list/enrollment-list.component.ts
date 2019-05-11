import {Component, OnInit} from '@angular/core';
import {EnrollmentService} from '../../services/enrollment.service';
import {CityService} from '../../dto/city.service';
import {TokenService} from '../../services/token.service';

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
              private tokenService: TokenService) {
  }

  ngOnInit() {
    this.tokenService.checkAuthorities('ROLE_MANAGER');
    this.cityService.getCities().subscribe(cities => this.cities = cities);
  }

  getEnrollments(selectedCity: string) {
    this.enrollmentService.getAllEnrollments(selectedCity).subscribe(enrollments => {
      console.log(enrollments);
      this.enrollments = enrollments;
    });
  }

  removeEnrollment(enrollmentId: number) {
    this.enrollments = this.enrollments.filter(enrollment => enrollment.id !== enrollmentId);
    this.enrollmentService.deleteEnrollment(enrollmentId);
  }


}
