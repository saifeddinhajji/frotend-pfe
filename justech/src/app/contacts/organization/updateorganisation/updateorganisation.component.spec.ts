import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateorganisationComponent } from './updateorganisation.component';

describe('UpdateorganisationComponent', () => {
  let component: UpdateorganisationComponent;
  let fixture: ComponentFixture<UpdateorganisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateorganisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateorganisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
