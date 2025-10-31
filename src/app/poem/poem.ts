import { Component, OnInit } from '@angular/core';
import { Poetry } from '../services/poetry';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-poem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './poem.html',
  styleUrl: './poem.css',
})
export class Poem implements OnInit { 
  poem: any = null; 
  loading = true;
  authors: string[] = [];

  constructor(private poetry: Poetry) {}

  ngOnInit() {
    this.poetry.getAllAuthors().subscribe({
      next: (data) => {
        this.authors = data.authors; // i need to populate the authors first or else the api will error
        this.getRandomPoemByAuthor(); 
      },
      error: (error) => {
        console.error('Error fetching authors:', error);
        this.loading = false;
      }
    });
  }

  getRandomAuthor(): string {
    const random = Math.floor(Math.random() * this.authors.length);
    return this.authors[random];
  }

  getRandomPoemByAuthor() {
    this.loading = true;
    this.poetry.getRandomPoemByAuthor(this.getRandomAuthor()).subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.length);
          this.poem = data[randomIndex];
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('API Error:', error);
        this.loading = false;
      }
    });
  }
}