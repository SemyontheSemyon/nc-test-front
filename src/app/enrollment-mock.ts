import {Enrollment} from './enrollment';
import {SPECIALITIES} from './speciality-mock';

export const ENROLLMENTS: Enrollment[] = [
  {id: 1,
    speciality: 'DEV',
    appStart: new Date('2/9/19'),
    appEnd: new Date('2/16/19'),
    testStart: new Date('4/16/19'),
    testEnd: new Date('4/23/19'),
    createdAt: new Date('1/1/19')
  },
  {id: 2,
    speciality: 'BA',
    appStart: new Date('2/9/19'),
    appEnd: new Date('2/16/19'),
    testStart: new Date('4/16/19'),
    testEnd: new Date('4/23/19'),
    createdAt: new Date('1/1/19')
  },
  {id: 3,
    speciality: 'QA',
    appStart: new Date('2/9/19'),
    appEnd: new Date('2/16/19'),
    testStart: new Date('4/16/19'),
    testEnd: new Date('4/23/19'),
    createdAt: new Date('1/1/19')
  }
];
