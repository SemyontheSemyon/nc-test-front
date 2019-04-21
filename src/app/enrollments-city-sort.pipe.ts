import {Pipe, PipeTransform} from '@angular/core';
import {Enrollment} from './enrollment';

@Pipe({
  name: 'enrollmentsCitySort'
})
export class EnrollmentsCitySortPipe implements PipeTransform {

  transform(enrollments: Enrollment[], city: string): Enrollment[] {
    return enrollments.filter(enrollment => enrollment.city === city);
  }

}
