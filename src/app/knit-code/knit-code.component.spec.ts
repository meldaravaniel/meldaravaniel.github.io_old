import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnitCodeComponent } from './knit-code.component';

describe('KnitCodeComponent', () => {
  let component: KnitCodeComponent;
  let fixture: ComponentFixture<KnitCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnitCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnitCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
