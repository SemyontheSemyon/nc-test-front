import {Component, OnInit} from '@angular/core';
import {Question} from '../../dto/question';
import {QuestionService} from '../../services/question.service';
import {TokenService} from '../../services/token.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questions: Question[] = [];

  specialities: string[] = ['BA', 'QA', 'DEV'];

  selectedSpeciality: string;

  constructor(private questionService: QuestionService,
              private tokenService: TokenService) {
  }

  ngOnInit() {
    this.tokenService.checkAuthorities('ROLE_MANAGER');
  }

  getQuestions(speciality: string) {
    this.questionService.getQuestions(speciality).subscribe(questions => this.questions = questions);
  }

  removeQuestion(i: number) {
    this.questions = this.questions.filter(question => question.id !== i);
    this.questionService.deleteQuestion(i);
  }

}


