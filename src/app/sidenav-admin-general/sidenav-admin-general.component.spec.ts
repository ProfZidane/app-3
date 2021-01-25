import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavAdminGeneralComponent } from './sidenav-admin-general.component';

describe('SidenavAdminGeneralComponent', () => {
  let component: SidenavAdminGeneralComponent;
  let fixture: ComponentFixture<SidenavAdminGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavAdminGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavAdminGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
