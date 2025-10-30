import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  images = [
    { src: 'assets/shake.jpeg', delay: 0, rotation: -8, x: '20%', y: '15%' },
    { src: 'assets/emily.jpeg', delay: 0.1, rotation: 12, x: '70%', y: '20%' },
    { src: 'assets/poe.jpg', delay: 0.2, rotation: -15, x: '30%', y: '65%' },
  ];
}