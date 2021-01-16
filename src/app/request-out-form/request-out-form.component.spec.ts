import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestOutFormComponent } from './request-out-form.component';

describe('RequestOutFormComponent', () => {
  let component: RequestOutFormComponent;
  let fixture: ComponentFixture<RequestOutFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestOutFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestOutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
