import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillformationComponent } from './detaillformation.component';

describe('DetaillformationComponent', () => {
  let component: DetaillformationComponent;
  let fixture: ComponentFixture<DetaillformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaillformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaillformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
