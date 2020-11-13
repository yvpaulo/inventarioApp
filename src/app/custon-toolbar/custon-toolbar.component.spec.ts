import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustonToolbarComponent } from './custon-toolbar.component';

describe('CustonToolbarComponent', () => {
  let component: CustonToolbarComponent;
  let fixture: ComponentFixture<CustonToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustonToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustonToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
