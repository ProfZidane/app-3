import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultMedComponent } from './consult-med.component';

describe('ConsultMedComponent', () => {
  let component: ConsultMedComponent;
  let fixture: ComponentFixture<ConsultMedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultMedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
