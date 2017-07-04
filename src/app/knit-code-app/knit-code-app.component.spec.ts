import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnitCodeAppComponent } from './knit-code-app.component';

describe('KnitCodeAppComponent', () => {
  let component: KnitCodeAppComponent;
  let fixture: ComponentFixture<KnitCodeAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnitCodeAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnitCodeAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
