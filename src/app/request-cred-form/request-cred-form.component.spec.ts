import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCredFormComponent } from './request-cred-form.component';

describe('RequestCredFormComponent', () => {
  let component: RequestCredFormComponent;
  let fixture: ComponentFixture<RequestCredFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestCredFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestCredFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
