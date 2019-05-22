import {Component, Input, OnInit} from '@angular/core';
import {QuestionService} from '../../services/question.service';
import {Question} from '../../dto/question';
import {TokenService} from '../../services/token.service';
import index from "@angular/cli/lib/cli";

@Component({
  selector: 'app-question-create',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.scss']
})
export class QuestionCreateComponent implements OnInit {

  types: string[] = ['radio', 'free', 'check'];

  specialities: string[] = ['BA', 'QA', 'DEV'];

  checked = [];

  @Input() editing = false;

  @Input() question: Question = new Question();

  constructor(private questionService: QuestionService,
              private tokenService: TokenService) {
  }

  ngOnInit() {
    if (this.question.answers === undefined) {
      this.question.answers = [''];
      this.question.correctAnswer = [''];
    } else { this.setCorrect(); }
  }

  addAnswer() {
    if (this.question.answers[this.question.answers.length - 1] !== '') {
      this.question.answers.push('');
      console.log(this.question.answers);
    }
  }

  addQuestion() {
    this.question.answers = this.question.answers.filter(answer => answer !== '');

    if (this.question.type !== 'check') {
      this.question.correctAnswer = [this.question.correctAnswer[0]];
    }

    console.log(this.question);
    this.questionService.addQuestion(this.question);
  }

  removeQuestion(i: number) {
    this.question.answers = this.question.answers.filter(((value, index) => index !== i));
  }

  updateCorrect() {
    let q = [];
    this.checked.forEach((value, index1) => {
      if (value === true) {q.push(this.question.answers[index1]); }
    });
    this.question.correctAnswer = q;
  }

  setCorrect() {
    if (this.question.type === 'check') {
      this.question.answers.forEach(answer => {
        if (this.question.correctAnswer.find(correct => correct === answer) !== undefined) {
          this.checked.push(true);
        } else {
          this.checked.push(false);
        }
      });
    }
  }

}
