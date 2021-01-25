import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDemandNcComponent } from './list-demand-nc.component';

describe('ListDemandNcComponent', () => {
  let component: ListDemandNcComponent;
  let fixture: ComponentFixture<ListDemandNcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDemandNcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDemandNcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
