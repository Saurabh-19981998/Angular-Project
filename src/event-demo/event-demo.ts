import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-event-demo',
  imports: [CommonModule],
  templateUrl: './event-demo.html',
  styleUrl: './event-demo.css'
})
export class EventDemo {

  buttonClicks = 0;
  lastKeyPressed = '';
  
  incrementCount(): void {
    this.buttonClicks++;
    console.log('Button clicked! Count:', this.buttonClicks);
  }

  //method to handle keyup event and access the event object
  onKeyUp(event: KeyboardEvent): void {
    this.lastKeyPressed = event.key;
    console.log('Key pressed:', this.lastKeyPressed);
  }

   // Method using a key modifier
  onEnterPress(): void {
    alert('You pressed the Enter key!');
  }

  // Method to prevent default anchor behavior
  showOverlay(event: MouseEvent): void {
    event.preventDefault();
    alert('You clicked the link, but the URL did not change!');
  }
}
