import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Twowaydata2Component } from './twowaydata2.component';

describe('Twowaydata2Component', () => {
  let component: Twowaydata2Component;
  let fixture: ComponentFixture<Twowaydata2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Twowaydata2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Twowaydata2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
