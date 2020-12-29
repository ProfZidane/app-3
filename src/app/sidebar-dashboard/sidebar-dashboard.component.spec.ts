import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarDashboardComponent } from './sidebar-dashboard.component';

describe('SidebarDashboardComponent', () => {
  let component: SidebarDashboardComponent;
  let fixture: ComponentFixture<SidebarDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
