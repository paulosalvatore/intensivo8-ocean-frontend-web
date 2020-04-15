import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LugaresViewComponent } from './lugares-view.component';

describe('LugaresViewComponent', () => {
  let component: LugaresViewComponent;
  let fixture: ComponentFixture<LugaresViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LugaresViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LugaresViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
