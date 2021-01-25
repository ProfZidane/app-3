import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayListComponent } from './pay-list.component';

describe('PayListComponent', () => {
  let component: PayListComponent;
  let fixture: ComponentFixture<PayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
