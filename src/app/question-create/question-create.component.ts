import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../question.service';
import {Question} from '../question';
import {TokenService} from '../token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-question-create',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.scss']
})
export class QuestionCreateComponent implements OnInit {

  types: string[] = ['radio', 'free'];

  specialities: string[] = ['BA', 'QA', 'DEV'];

  question: Question = new Question();

  constructor(private questionService: QuestionService,
              private tokenService: TokenService) { }

  ngOnInit() {
    this.tokenService.checkAuthorities('ROLE_MANAGER');
    this.question.answers = [''];
  }

  addAnswer() {
    if (this.question.answers[this.question.answers.length - 1] !== '') {
    this.question.answers.push('');
    console.log(this.question.answers); }
  }

  addQuestion() {
    this.question.answers = this.question.answers.slice(0, this.question.answers.length - 1);
    console.log(this.question);
    this.questionService.addQuestion(this.question);
  }

}
