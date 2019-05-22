import {Component, OnInit} from '@angular/core';
import {QuestionService} from '../../services/question.service';
import {Question} from '../../dto/question';
import {Router} from '@angular/router';
import {TestService} from '../../services/test.service';
import {UserService} from '../../services/user.service';
import {UserInfo} from '../../dto/user-info';
import {timer} from 'rxjs';

@Component({
  selector: 'app-test-question-holder',
  templateUrl: './test-question-holder.component.html',
  styleUrls: ['./test-question-holder.component.scss']
})
export class TestQuestionHolderComponent implements OnInit {

  questions: Question[] = [];
  checks = [];
  answers = [];
  currentQuestion: number;
  confirm = false;
  userInfo: UserInfo;
  testTime = {time: 999, mins: 99, secs: 99};
  testTimer = timer(1000, 1000);

  constructor(private testService: TestService,
              private questionService: QuestionService,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    this.checkUserInfo();
    this.getQuestions();
    this.getTestTime();
    this.startTimer();
  }

  submitAnswers() {
    console.log(this.answers);
    this.testService.sendAnswers(this.answers);
    console.log(this.userInfo);
    this.userInfo.studentStatus = 'TestWritten';
    this.userService.saveUserInfo(this.userInfo).subscribe();
    this.router.navigate(['/test/finish']);
  }

  getQuestions() {
    this.testService.getQuestions().subscribe(questions => {
      questions.forEach(question => {
        this.answers.push({id: question.id, studentAnswer: ['']});
        this.checks.push([]);
      });
      this.questions = questions;
      this.currentQuestion = 0;
    });
  }

  nextQuestion() {
    if (this.currentQuestion < this.questions.length - 1) {
      this.currentQuestion++;
    }
  }

  prevQuestion() {
    if (this.currentQuestion > 0) {
      this.currentQuestion--;
    }
  }

  checkUserInfo() {
    this.userService.getUserInfo().subscribe(userInfo => {
      this.userInfo = userInfo;
      if (userInfo.studentStatus !== 'Applied') {
        this.router.navigate(['/home']);
      }
    });
  }

  getTestTime() {
    this.testService.getTestFormat().subscribe(testFormat => this.testTime.time = testFormat.time * 60);
  }

  startTimer() {
    this.testTimer.subscribe(val => {
      this.testTime.time--;
      this.testTime.mins = Math.trunc(this.testTime.time / 60);
      this.testTime.secs = this.testTime.time % 60;
      if (this.testTime.time === 0) {
        this.submitAnswers();
      }
    });
  }

  updateAnswers() {
    let q = [];
    this.checks[this.currentQuestion].forEach((value, index) => {
      if (value === true) {q.push(this.questions[this.currentQuestion].answers[index]); }
    });
    this.answers[this.currentQuestion].studentAnswer = q;
  }


}
