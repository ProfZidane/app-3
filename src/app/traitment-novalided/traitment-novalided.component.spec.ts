import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitmentNovalidedComponent } from './traitment-novalided.component';

describe('TraitmentNovalidedComponent', () => {
  let component: TraitmentNovalidedComponent;
  let fixture: ComponentFixture<TraitmentNovalidedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraitmentNovalidedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraitmentNovalidedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
