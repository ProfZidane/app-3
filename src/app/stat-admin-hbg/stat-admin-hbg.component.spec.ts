import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatAdminHbgComponent } from './stat-admin-hbg.component';

describe('StatAdminHbgComponent', () => {
  let component: StatAdminHbgComponent;
  let fixture: ComponentFixture<StatAdminHbgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatAdminHbgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatAdminHbgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
