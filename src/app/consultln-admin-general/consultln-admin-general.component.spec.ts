import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultlnAdminGeneralComponent } from './consultln-admin-general.component';

describe('ConsultlnAdminGeneralComponent', () => {
  let component: ConsultlnAdminGeneralComponent;
  let fixture: ComponentFixture<ConsultlnAdminGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultlnAdminGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultlnAdminGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
