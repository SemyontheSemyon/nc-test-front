import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {QUESTIONS} from './question-mock';
import {Question} from './question';
import {LOCALHOST} from './localhost';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  localhostURL = LOCALHOST;
  questionURL = this.localhostURL + 'api/question';

  questions: Question[] = [];

  constructor(private http: HttpClient) { }

  getQuestions(): Question[] {
    if (this.questions.length === 0) { of(QUESTIONS).subscribe(questions => this.questions = questions); }
    return this.questions;
  }

  submitAnswers() {

  }

  addQuestion(question: Question) {
    this.http.post<Question>(this.questionURL, question);
  }


}
