import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavAdminMedComponent } from './sidenav-admin-med.component';

describe('SidenavAdminMedComponent', () => {
  let component: SidenavAdminMedComponent;
  let fixture: ComponentFixture<SidenavAdminMedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavAdminMedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavAdminMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
