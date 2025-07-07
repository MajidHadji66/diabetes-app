import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ApiServer } from '../../services/api.service';

interface JournalEntry {
  date: string;
  note: string;
}

@Component({
  selector: 'app-journal',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss'],
})
export class JournalComponent implements OnInit {
  journalForm: FormGroup;
  entries: any[] = [];

  constructor(private fb: FormBuilder, private api: ApiServer) {
    this.journalForm = this.fb.group({ note: [''] });
  }

  ngOnInit(): void {
    this.api.getJournalEntries().subscribe((entries: any[]) => {
      this.entries = entries;
    });
  }

  saveReflection(): void {
    const note = this.journalForm.value.note;
    this.api.addJournalEntry(note).subscribe((entry: any) => {
      this.entries.unshift(entry);
      this.journalForm.reset();
    });
  }
}
