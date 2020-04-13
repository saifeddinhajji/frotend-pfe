import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendmailerComponent } from './sendmailer.component';

describe('SendmailerComponent', () => {
  let component: SendmailerComponent;
  let fixture: ComponentFixture<SendmailerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendmailerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendmailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
