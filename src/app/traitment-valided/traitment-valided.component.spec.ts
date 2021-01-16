import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitmentValidedComponent } from './traitment-valided.component';

describe('TraitmentValidedComponent', () => {
  let component: TraitmentValidedComponent;
  let fixture: ComponentFixture<TraitmentValidedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraitmentValidedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraitmentValidedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
