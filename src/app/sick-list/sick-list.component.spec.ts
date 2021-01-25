import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SickListComponent } from './sick-list.component';

describe('SickListComponent', () => {
  let component: SickListComponent;
  let fixture: ComponentFixture<SickListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SickListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SickListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
