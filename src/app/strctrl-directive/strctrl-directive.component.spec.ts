import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrctrlDirectiveComponent } from './strctrl-directive.component';

describe('StrctrlDirectiveComponent', () => {
  let component: StrctrlDirectiveComponent;
  let fixture: ComponentFixture<StrctrlDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrctrlDirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrctrlDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
