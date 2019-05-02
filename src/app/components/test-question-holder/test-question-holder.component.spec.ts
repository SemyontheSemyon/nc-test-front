import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TestQuestionHolderComponent} from './test-question-holder.component';

describe('TestQuestionHolderComponent', () => {
  let component: TestQuestionHolderComponent;
  let fixture: ComponentFixture<TestQuestionHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestQuestionHolderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestQuestionHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
