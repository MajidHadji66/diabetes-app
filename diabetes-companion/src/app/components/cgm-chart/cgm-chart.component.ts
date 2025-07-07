import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-cgm-chart',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './cgm-chart.component.html',
  styleUrl: './cgm-chart.component.scss',
})
export class CgmChartComponent {
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['6AM', '9AM', '12PM', '3PM', '6PM'],
    datasets: [
      {
        data: [120, 135, 140, 110, 100],
        label: 'Glucose (mg/dL)',
        fill: false,
        borderColor: '#3f51b5',
      },
    ],
  };

  public lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    scales: {
      y: { min: 70, max: 180 },
    },
  };
}
