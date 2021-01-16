import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Stat1AdminMedComponent } from './stat1-admin-med.component';

describe('Stat1AdminMedComponent', () => {
  let component: Stat1AdminMedComponent;
  let fixture: ComponentFixture<Stat1AdminMedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stat1AdminMedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Stat1AdminMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
