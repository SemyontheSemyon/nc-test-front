import {Component, Input, OnInit} from '@angular/core';
import {Speciality} from '../speciality';

@Component({
  selector: 'app-speciality-card',
  templateUrl: './speciality-card.component.html',
  styleUrls: ['./speciality-card.component.scss']
})
export class SpecialityCardComponent implements OnInit {

  @Input() speciality: Speciality;

  constructor() { }

  ngOnInit() {
  }

}
