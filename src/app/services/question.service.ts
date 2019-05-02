import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Question} from '../dto/question';
import {LOCALHOST} from '../localhost';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  localhostURL = LOCALHOST;
  questionURL = this.localhostURL + 'api/question/';


  constructor(private http: HttpClient) {
  }

  getQuestions(speciality: string): Observable<Question[]> {
    return this.http.get<Question[]>(this.questionURL + speciality);
  }

  submitAnswers() {

  }

  addQuestion(question: Question) {
    this.http.post<Question>(this.questionURL, question).subscribe();
  }

  deleteQuestion(questionId: number) {
    this.http.delete(this.questionURL + questionId).subscribe(response => console.log(response));
  }


}
