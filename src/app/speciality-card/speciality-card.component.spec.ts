import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialityCardComponent } from './speciality-card.component';

describe('SpecialityCardComponent', () => {
  let component: SpecialityCardComponent;
  let fixture: ComponentFixture<SpecialityCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialityCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
