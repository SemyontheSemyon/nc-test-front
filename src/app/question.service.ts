import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {QUESTIONS} from './question-mock';
import {Question} from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questions: Question[] = [];

  constructor() { }

  getQuestions(): Question[] {
    if (this.questions.length === 0) { of(QUESTIONS).subscribe(questions => this.questions = questions); }
    return this.questions;
  }

  submitAnswers() {

  }
  //TODO: submit answers


}
