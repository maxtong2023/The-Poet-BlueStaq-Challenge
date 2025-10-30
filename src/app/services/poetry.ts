import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})


export class Poetry {
  private apiURL = 'https://poetrydb.org';

  constructor(private http: HttpClient) {}

  getRandomPoemByAuthor(author: string): Observable<any[]> {
    const encoded = encodeURIComponent(author);
    return this.http.get<any[]>(`${this.apiURL}/author/${encoded}`);
  }
  
}
