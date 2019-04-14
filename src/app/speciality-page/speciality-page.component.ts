import { Component, OnInit } from '@angular/core';
import {SpecialityService} from '../speciality.service';
import {Speciality} from '../speciality';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-speciality-page',
  templateUrl: './speciality-page.component.html',
  styleUrls: ['./speciality-page.component.scss']
})
export class SpecialityPageComponent implements OnInit {

  speciality: Speciality;

  constructor(private specialityService: SpecialityService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getSpeciality();
  }

  getSpeciality() {
    const name = this.route.snapshot.paramMap.get('name');
    this.specialityService.getSpeciality(name)
      .subscribe(speciality => this.speciality = speciality);
  }

}
