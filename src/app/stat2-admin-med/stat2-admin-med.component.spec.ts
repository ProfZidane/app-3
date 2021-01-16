import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Stat2AdminMedComponent } from './stat2-admin-med.component';

describe('Stat2AdminMedComponent', () => {
  let component: Stat2AdminMedComponent;
  let fixture: ComponentFixture<Stat2AdminMedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stat2AdminMedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Stat2AdminMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
