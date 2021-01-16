import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTraitAdminMedComponent } from './request-trait-admin-med.component';

describe('RequestTraitAdminMedComponent', () => {
  let component: RequestTraitAdminMedComponent;
  let fixture: ComponentFixture<RequestTraitAdminMedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestTraitAdminMedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestTraitAdminMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
