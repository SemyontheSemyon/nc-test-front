import {Speciality} from './speciality';

const shortDescription: string = 'SHORT DESCRIPTION '.repeat(20);
const fullDescription: string = 'FULL DESCRIPTION '.repeat(100);

export const SPECIALITIES: Speciality[] = [
  {id: 1, name: 'BA', shortDescription, fullDescription},
  {id: 2, name: 'DEV', shortDescription, fullDescription},
  {id: 3, name: 'QA', shortDescription, fullDescription}
];
