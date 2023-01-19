import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowaydataComponent } from './twowaydata.component';

describe('TwowaydataComponent', () => {
  let component: TwowaydataComponent;
  let fixture: ComponentFixture<TwowaydataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwowaydataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwowaydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
