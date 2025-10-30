import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: '../app.css'
})
export class Home {
  images = [
    { src: 'assets/shake.jpeg', delay: 0, rotation: -8, x: '20%', y: '15%' },
    { src: 'assets/emily.jpeg', delay: 0.1, rotation: 12, x: '70%', y: '20%' },
    { src: 'assets/poe.jpg', delay: 0.2, rotation: -15, x: '30%', y: '65%' },
  ];

  constructor(private router: Router) {}

  onClickPlay() {
    this.router.navigate(['/poem']);
  }
}
