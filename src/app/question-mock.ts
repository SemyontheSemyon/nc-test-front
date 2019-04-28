import {Question} from './question';

export const QUESTIONS: Question[] = [
  {id: 1, text: 'radio1', type: 'radio', answers: ['ans1', 'ans2', 'ans3'], correctAnswer: 'ans1'},
  //{id: 2, text: 'check1', type: 'check', answers: ['ans1', 'ans2', 'ans3'] },
  {id: 3, text: 'free1', type: 'free', answers: [], correctAnswer: 'ans1'},
  {id: 4, text: 'free2', type: 'free', answers: [], correctAnswer: 'ans1'},
  {id: 551, text: 'radio2', type: 'radio', answers: ['ans1', 'ans2', 'ans3'], correctAnswer: 'ans1'},
  //{id: 6, text: 'check2', type: 'check', answers: ['ans1', 'ans2', 'ans3'] },
];
