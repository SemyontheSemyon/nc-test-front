import {Enrollment} from './enrollment';
import {TestFormat} from './test-format';

export class EnrollmentCityTestFormat {

  enrollment: Enrollment;
  city: string;
  testFormat: TestFormat;


  constructor(enrollment: Enrollment, city: string, testFormat: TestFormat) {
    this.enrollment = enrollment;
    this.city = city;
    this.testFormat = testFormat;
  }
}
