import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrDashboardComponent } from './qr-dashboard.component';

describe('QrDashboardComponent', () => {
  let component: QrDashboardComponent;
  let fixture: ComponentFixture<QrDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
