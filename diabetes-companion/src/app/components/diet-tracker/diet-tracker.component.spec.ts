import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietTrackerComponent } from './diet-tracker.component';

describe('DietTrackerComponent', () => {
  let component: DietTrackerComponent;
  let fixture: ComponentFixture<DietTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DietTrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
