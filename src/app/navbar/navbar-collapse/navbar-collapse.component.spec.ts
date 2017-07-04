import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCollapseComponent } from './navbar-collapse.component';

describe('NavbarCollapseComponent', () => {
  let component: NavbarCollapseComponent;
  let fixture: ComponentFixture<NavbarCollapseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarCollapseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
