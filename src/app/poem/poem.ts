import { Component, OnInit } from '@angular/core';
import { Poetry } from '../services/poetry';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poem',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './poem.html',
  styleUrl: './poem.css',
})
export class Poem implements OnInit { 
  poem: any = null; 
  loading = true;
  authors: string[] = [];
  userInput: string = '';
  author: string = '';

  constructor(private poetry: Poetry, private router: Router) {}

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

  goBack(){
    this.router.navigate(['/home']);
  }

  getRandomAuthor(): string {
    const random = Math.floor(Math.random() * this.authors.length);
    return this.authors[random];
  }

  getRandomPoemByAuthor() {
    this.poem = null; // clear the old poem so they don't stack
    this.loading = true;
    const chosenAuthor = this.getRandomAuthor();
    this.author = chosenAuthor; 
    this.poetry.getRandomPoemByAuthor(chosenAuthor).subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.length);
          this.poem = data[randomIndex];
          if (this.poem?.author) {
            this.author = this.poem.author;
          }
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('API Error:', error);
        this.loading = false;
      }
    });
  }

  submitInput() {
    if(this.author.toLowerCase() != this.userInput.toLowerCase()){
      console.log('Incorrect');
      alert('Wrong! The correct answer is ' + this.author);
    } else {
      console.log('Correct');
      alert('Correct! The answer was ' + this.author + '!');
    }
    
    this.userInput = '';
    this.getRandomPoemByAuthor();
  }
}