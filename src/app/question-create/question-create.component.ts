import {Component, Input, OnInit} from '@angular/core';
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

  @Input() editing = false;

  @Input() question: Question = new Question();

  constructor(private questionService: QuestionService,
              private tokenService: TokenService) { }

  ngOnInit() {
    if (this.question.answers === undefined) this.question.answers = [''];
  }

  addAnswer() {
    if (this.question.answers[this.question.answers.length - 1] !== '') {
    this.question.answers.push('');
    console.log(this.question.answers); }
  }

  addQuestion() {
    this.question.answers = this.question.answers.filter(answer => answer !== '');
    console.log(this.question);
    this.questionService.addQuestion(this.question);
  }

  removeQuestion(i: number) {
    this.question.answers = this.question.answers.filter(((value, index) => index !== i));
  }

}
