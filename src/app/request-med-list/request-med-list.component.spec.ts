import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestMedListComponent } from './request-med-list.component';

describe('RequestMedListComponent', () => {
  let component: RequestMedListComponent;
  let fixture: ComponentFixture<RequestMedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestMedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestMedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
