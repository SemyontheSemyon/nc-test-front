import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentPageComponent } from './enrollment-page.component';

describe('EnrollmentPageComponent', () => {
  let component: EnrollmentPageComponent;
  let fixture: ComponentFixture<EnrollmentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollmentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
