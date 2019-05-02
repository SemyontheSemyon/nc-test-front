import {Component, OnInit} from '@angular/core';
import {Speciality} from '../../dto/speciality';
import {SpecialityService} from '../../services/speciality.service';

@Component({
  selector: 'app-speciality-pad',
  templateUrl: './speciality-pad.component.html',
  styleUrls: ['./speciality-pad.component.scss']
})
export class SpecialityPadComponent implements OnInit {

  specialities: Speciality[] = [];

  constructor(private specialityService: SpecialityService) {
  }

  ngOnInit() {
    this.getSpecialities();
  }

  getSpecialities() {
    this.specialityService.getSpecialities()
      .subscribe(specialities => this.specialities = specialities);
  }

}
