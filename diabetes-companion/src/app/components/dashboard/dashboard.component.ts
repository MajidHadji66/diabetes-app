import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CgmChartComponent } from '../cgm-chart/cgm-chart.component';
import { ApiServer } from '../../services/api.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    CgmChartComponent,
    MatIconModule,
    MatDividerModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(private api: ApiServer) {}
  lastReflectionDate: string | null = null;
  meals = [
    { time: '08:00', name: 'Breakfast', carbs: 20 },
    { time: '13:00', name: 'Lunch', carbs: 45 },
  ];

  exercises = [{ time: '07:30', type: 'Walking', duration: 30 }];

  reflection =
    'Felt steady today. Glucose stayed in range after walk and breakfast.';

  ngOnInit(): void {
    this.api.getJournalEntries().subscribe((entries: any[]) => {
      if (entries.length > 0) {
        this.reflection = entries[0].note;
        this.lastReflectionDate = entries[0].date;
      }
    });
  }
}
