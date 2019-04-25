import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../question.service';
import {Question} from '../question';
import {CITIES} from '../cities-mock';

@Component({
  selector: 'app-question-create',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.scss']
})
export class QuestionCreateComponent implements OnInit {

  types: string[] = ['radio', 'free'];

  specialities: string[] = ['BA', 'QA', 'DEV'];

  question: Question = new Question();

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.question.answers = [];
  }

  addAnswer() {
    this.question.answers.push('');
  }

  addQuestion() {
    this.questionService.addQuestion(this.question);
  }

}
