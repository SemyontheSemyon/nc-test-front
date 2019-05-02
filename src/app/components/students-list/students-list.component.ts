import {Component, OnInit} from '@angular/core';
import {TestService} from '../../services/test.service';
import {UserTest} from '../../dto/user-test';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {

  userTests: UserTest[];

  constructor(private testService: TestService) {
  }

  ngOnInit() {
    this.getUserTests();
    console.log(this.userTests);
  }

  getUserTests() {
    this.testService.getUserTests().subscribe(userTests => {
      this.userTests = userTests;
      console.log(this.userTests);
    });
  }


}
