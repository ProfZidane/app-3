import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestOutListComponent } from './request-out-list.component';

describe('RequestOutListComponent', () => {
  let component: RequestOutListComponent;
  let fixture: ComponentFixture<RequestOutListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestOutListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestOutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
