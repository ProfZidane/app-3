import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCredListComponent } from './request-cred-list.component';

describe('RequestCredListComponent', () => {
  let component: RequestCredListComponent;
  let fixture: ComponentFixture<RequestCredListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestCredListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestCredListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
