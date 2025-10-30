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

  constructor(private poetry: Poetry) {}

  ngOnInit() {
    this.poetry.getRandomPoemByAuthor('Emily Dickinson').subscribe({
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

  getRandomPoemByAuthor() {
    this.loading = true;
    this.poetry.getRandomPoemByAuthor('Emily Dickinson').subscribe({
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