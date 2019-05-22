import {Component, OnInit} from '@angular/core';
import {UserTest} from '../../dto/user-test';
import {TestService} from '../../services/test.service';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  userTests: UserTest[];
  specialities: string[] = ['BA', 'QA', 'DEV'];
  currentSpeciality: string;


  public barChartLabels: Label[] = [];
  public barChartData: ChartDataSets[]  = [{data: [], label: 'DEV'},
    {data: [], label: 'QA'},
    {data: [], label: 'BA'}];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public lineChartData: ChartDataSets[] = [
    {data: [], label: ''}
  ];
  public lineChartLabels: Label[] = [];
  public lineChartLegend = true;
  public lineChartType = 'line';

  constructor(private testService: TestService) {
  }

  ngOnInit() {
    this.getUserTests();
  }

  getUserTests() {
    this.testService.getUserTests().subscribe(userTests => {
      console.log(userTests);
      this.userTests = userTests;

      this.barChartLabels = userTests.map(userTest => {
        return userTest.takenAt.toString().slice(0, 10);
      }).filter((value, index, self) => self.indexOf(value) === index).sort();

    });
  }

  getSpecialityData(speciality: string) {
    let data = [];
    this.barChartLabels.forEach(date => {
      let counter = 0;
      this.userTests.forEach(userTest => {
        if (userTest.userAnswers[0].question.speciality.name === speciality && userTest.takenAt.toString().slice(0, 10) === date) {
          counter++;
        }
      });
      data.push(counter);
    });
    return data;
  }

  getCorrectData(speciality: string) {
    let data = [];
    this.barChartLabels.forEach(date => {
      let counter = 0;
      this.userTests.forEach(userTest => {
        if (userTest.userAnswers[0].question.speciality.name === speciality && userTest.takenAt.toString().slice(0, 10) === date
          && userTest.passed) {
          counter++;
        }
      });
      data.push(counter);
    });
    return data;
  }

  getTestData() {
    if (this.lineChartLabels) {
      this.lineChartLabels = [];
    }

    this.userTests.forEach(userTest => {
      userTest.userAnswers.forEach(userAnswer => {
        if (!this.lineChartLabels.includes(userAnswer.question.text) && userAnswer.question.speciality.name === this.currentSpeciality) {
          this.lineChartLabels.push(userAnswer.question.text);
        }
      });
    });

    let data = [];
    this.lineChartLabels.forEach(question => {
      let counter = 0;
      this.userTests.forEach(userTest => {
        userTest.userAnswers.forEach(userAnswer => {
          if (userAnswer.question.text === question && userAnswer.correct) {
            counter++;
          }
        });
      });
      data.push(counter);
    });

    return data;
  }

  setAllTests() {
    this.barChartData.map(data => {
      return data.data = this.getSpecialityData(data.label);
    });
  }

  setPassed() {
    this.barChartData.map(data => {
      return data.data = this.getCorrectData(data.label);
    });
  }

  getAllQuestions() {
    this.lineChartData.map(data => {
      data.label = this.currentSpeciality;
      return data.data = this.getTestData();
    });
  }
}
