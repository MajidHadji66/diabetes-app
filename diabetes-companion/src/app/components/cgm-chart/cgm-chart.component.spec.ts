import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgmChartComponent } from './cgm-chart.component';

describe('CgmChartComponent', () => {
  let component: CgmChartComponent;
  let fixture: ComponentFixture<CgmChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CgmChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CgmChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
