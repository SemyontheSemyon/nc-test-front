import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../question.service';
import {Question} from '../question';
import {Router} from '@angular/router';
import {TestService} from '../test.service';

@Component({
  selector: 'app-test-question-holder',
  templateUrl: './test-question-holder.component.html',
  styleUrls: ['./test-question-holder.component.scss']
})
export class TestQuestionHolderComponent implements OnInit {

  constructor(private testService: TestService,
              private questionService: QuestionService,
              private router: Router) { }

  questions: Question[] = [];
  confirm = false;

  ngOnInit() {
    this.testService.getQuestions().subscribe(questions => {
      questions.forEach(question => question.studentAnswer = '');
      this.questions = questions; }
    );
  }

  submitAnswers() {
    console.log(this.questions);
    this.testService.sendAnswers(this.questions);
    this.router.navigate(['/test/finish']);
  }

}
