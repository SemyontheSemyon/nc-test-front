import {Component, OnInit} from '@angular/core';
import {TestService} from '../../services/test.service';
import {UserTest} from '../../dto/user-test';
import {CityService} from '../../dto/city.service';


@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {

  userTests: UserTest[];
  searchText: string;
  currentTest: number;

  constructor(private cityService: CityService,
              private testService: TestService) {
  }

  ngOnInit() {
    this.getUserTests();
  }

  getUserTests() {
    this.testService.getUserTests().subscribe(userTests => {
      this.userTests = userTests;
    });
  }

  showTest(index: number) {
    this.currentTest = index;
  }
}
