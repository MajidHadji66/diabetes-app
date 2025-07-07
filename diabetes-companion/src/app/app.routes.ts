import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DietTrackerComponent } from './components/diet-tracker/diet-tracker.component';
import { ExerciseTrackerComponent } from './components/exercise-tracker/exercise-tracker.component';
import { JournalComponent } from './components/journal/journal.component';
import { SettingsComponent } from './components/settings/settings.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'diet-tracker', component: DietTrackerComponent },
  { path: 'exercise-tracker', component: ExerciseTrackerComponent },
  { path: 'journal', component: JournalComponent },
  { path: 'settings', component: SettingsComponent },
];
