import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LugaresListComponent } from './lugares-list.component';

describe('LugaresListComponent', () => {
  let component: LugaresListComponent;
  let fixture: ComponentFixture<LugaresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LugaresListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LugaresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
