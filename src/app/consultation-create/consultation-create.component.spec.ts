import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationCreateComponent } from './consultation-create.component';

describe('ConsultationCreateComponent', () => {
  let component: ConsultationCreateComponent;
  let fixture: ComponentFixture<ConsultationCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
