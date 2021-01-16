import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTraitAdminMedComponent } from './list-trait-admin-med.component';

describe('ListTraitAdminMedComponent', () => {
  let component: ListTraitAdminMedComponent;
  let fixture: ComponentFixture<ListTraitAdminMedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTraitAdminMedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTraitAdminMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
