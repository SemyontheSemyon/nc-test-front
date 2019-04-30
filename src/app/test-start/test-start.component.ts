import { Component, OnInit } from '@angular/core';
import {TestService} from '../test.service';
import {TestFormat} from '../test-format';

@Component({
  selector: 'app-test-start',
  templateUrl: './test-start.component.html',
  styleUrls: ['./test-start.component.scss']
})
export class TestStartComponent implements OnInit {

  testFormat: TestFormat;

  constructor(private testService: TestService) { }

  ngOnInit() {
    this.getTestFormat();
  }

  getTestFormat() {
    this.testService.getTestFormat().subscribe(testFormat => this.testFormat = testFormat);
    console.log(this.testFormat);
  }

}
