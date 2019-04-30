import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../question.service';
import {Question} from '../question';
import {Router} from '@angular/router';
import {TestService} from '../test.service';
import {UserService} from '../user.service';
import {UserInfo} from '../user-info';

@Component({
  selector: 'app-test-question-holder',
  templateUrl: './test-question-holder.component.html',
  styleUrls: ['./test-question-holder.component.scss']
})
export class TestQuestionHolderComponent implements OnInit {

  constructor(private testService: TestService,
              private questionService: QuestionService,
              private userService: UserService,
              private router: Router) { }

  questions: Question[] = [];
  answers = [];
  confirm = false;
  userInfo: UserInfo;

  ngOnInit() {
    this.testService.getQuestions().subscribe(questions => {
      questions.forEach(question => this.answers.push({id: question.id, studentAnswer: ''}));
      this.questions = questions; }
    );
    this.userService.getUserInfo().subscribe(userInfo => {
      this.userInfo = userInfo;
      if (userInfo.studentStatus !== 'Registred') {this.router.navigate(['/home']); }
    });
  }

  submitAnswers() {
    console.log(this.answers);
    this.testService.sendAnswers(this.answers);
    console.log(this.userInfo);
    this.userInfo.studentStatus = 'TestWritten';
    this.userService.saveUserInfo(this.userInfo).subscribe();
    this.router.navigate(['/test/finish']);
  }

}
