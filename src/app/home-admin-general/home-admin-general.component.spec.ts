import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdminGeneralComponent } from './home-admin-general.component';

describe('HomeAdminGeneralComponent', () => {
  let component: HomeAdminGeneralComponent;
  let fixture: ComponentFixture<HomeAdminGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAdminGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAdminGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
