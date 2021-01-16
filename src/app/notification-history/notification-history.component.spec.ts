import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationHistoryComponent } from './notification-history.component';

describe('NotificationHistoryComponent', () => {
  let component: NotificationHistoryComponent;
  let fixture: ComponentFixture<NotificationHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
