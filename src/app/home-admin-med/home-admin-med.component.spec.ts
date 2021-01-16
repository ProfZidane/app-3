import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdminMedComponent } from './home-admin-med.component';

describe('HomeAdminMedComponent', () => {
  let component: HomeAdminMedComponent;
  let fixture: ComponentFixture<HomeAdminMedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAdminMedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAdminMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
