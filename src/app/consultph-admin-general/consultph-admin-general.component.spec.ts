import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultphAdminGeneralComponent } from './consultph-admin-general.component';

describe('ConsultphAdminGeneralComponent', () => {
  let component: ConsultphAdminGeneralComponent;
  let fixture: ComponentFixture<ConsultphAdminGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultphAdminGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultphAdminGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
