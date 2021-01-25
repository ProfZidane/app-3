import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultFormComponent } from './consult-form.component';

describe('ConsultFormComponent', () => {
  let component: ConsultFormComponent;
  let fixture: ComponentFixture<ConsultFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
