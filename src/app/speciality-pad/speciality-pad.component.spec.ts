import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialityPadComponent } from './speciality-pad.component';

describe('SpecialityPadComponent', () => {
  let component: SpecialityPadComponent;
  let fixture: ComponentFixture<SpecialityPadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialityPadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialityPadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
