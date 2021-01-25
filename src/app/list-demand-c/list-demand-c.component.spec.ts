import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDemandCComponent } from './list-demand-c.component';

describe('ListDemandCComponent', () => {
  let component: ListDemandCComponent;
  let fixture: ComponentFixture<ListDemandCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDemandCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDemandCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
