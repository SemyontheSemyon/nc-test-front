import {EnrollmentCityTestFormat} from './enrollment-city-test-format';
import {ENROLLMENTS} from './enrollment-mock';
import {TEST_FORMATS} from './test-format-mock';

export const ECTF_MOCK: EnrollmentCityTestFormat[] = [
  {enrollment: ENROLLMENTS[0], city: 'SPb', testFormat: TEST_FORMATS[0]},
  {enrollment: ENROLLMENTS[1], city: 'SPb', testFormat: TEST_FORMATS[1]},
  {enrollment: ENROLLMENTS[2], city: 'SPb', testFormat: TEST_FORMATS[2]},
]
