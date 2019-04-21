import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../question.service';
import {Question} from '../question';
import {Router} from '@angular/router';

@Component({
  selector: 'app-test-question-holder',
  templateUrl: './test-question-holder.component.html',
  styleUrls: ['./test-question-holder.component.scss']
})
export class TestQuestionHolderComponent implements OnInit {

  constructor(private questionService: QuestionService,
              private router: Router) { }

  questions: Question[];

  ngOnInit() {
    this.questions = this.questionService.getQuestions();
  }

  submitQuestions() {
    console.log(this.questions[3].userAnswer);
    console.log(this.questions[0].userAnswer);
    this.router.navigate(['/test/finish']);
  }

}
