import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestMedFormComponent } from './request-med-form.component';

describe('RequestMedFormComponent', () => {
  let component: RequestMedFormComponent;
  let fixture: ComponentFixture<RequestMedFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestMedFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestMedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
