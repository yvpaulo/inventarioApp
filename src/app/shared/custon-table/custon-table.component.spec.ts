import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustonTableComponent } from './custon-table.component';

describe('CustonTableComponent', () => {
  let component: CustonTableComponent;
  let fixture: ComponentFixture<CustonTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustonTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustonTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
