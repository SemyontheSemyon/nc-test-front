import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {

  students: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.userService.getStudents().subscribe(students => this.students = students);
  }


}
