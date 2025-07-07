import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface JournalEntry {
  date: string;
  note: string;
}

@Injectable({ providedIn: 'root' })
export class ApiServer {
  constructor(private http: HttpClient) {}
  private readonly baseUrl = 'http://localhost:3000/api';

  getJournalEntries(): Observable<JournalEntry[]> {
    return this.http.get<JournalEntry[]>(`${this.baseUrl}/journal`);
  }

  addJournalEntry(note: string): Observable<JournalEntry> {
    return this.http.post<JournalEntry>(`${this.baseUrl}/journal`, { note });
  }

  // ✅ You can expand this later with delete/edit endpoints
}
