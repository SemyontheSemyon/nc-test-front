import {Injectable} from '@angular/core';
import {LOCALHOST} from './localhost';
import {Observable} from 'rxjs';
import {TestFormat} from './test-format';
import {HttpClient} from '@angular/common/http';
import {Question} from './question';
import {UserTest} from './user-test';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  localhost = LOCALHOST;

  testURL = this.localhost + 'api/test/';
  questionURL = this.testURL + 'questions';

  userTestURL = this.localhost + 'api/usertests';


  constructor(private http: HttpClient) {
  }

  getTestFormat(): Observable<TestFormat> {
    return this.http.get<TestFormat>(this.testURL);
  }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.questionURL);
  }

  sendAnswers(questions: Question[]) {
    return this.http.post<Question[]>(this.testURL, questions).subscribe();
  }

  getUserTests(): Observable<UserTest[]> {
    return this.http.get<UserTest[]>(this.userTestURL);
  }
}

