import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileHrComponent } from './profile-hr.component';

describe('ProfileHrComponent', () => {
  let component: ProfileHrComponent;
  let fixture: ComponentFixture<ProfileHrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileHrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
