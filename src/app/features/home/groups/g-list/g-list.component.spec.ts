import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GListComponent } from './g-list.component';

describe('GListComponent', () => {
  let component: GListComponent;
  let fixture: ComponentFixture<GListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
