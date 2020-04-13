import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailleorganisationComponent } from './detailleorganisation.component';

describe('DetailleorganisationComponent', () => {
  let component: DetailleorganisationComponent;
  let fixture: ComponentFixture<DetailleorganisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailleorganisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailleorganisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
