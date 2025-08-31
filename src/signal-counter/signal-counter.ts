import { Component, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signal-counter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <h3>Signals Counter</h3>
      <p>The count is: <strong>{{ count() }}</strong></p>
      <p>Double the count is: <strong>{{ doubleCount() }}</strong></p>
      <div class="actions">
        <button (click)="increment()">Increment</button>
        <button (click)="decrement()">Decrement</button>
        <button (click)="reset()">Reset</button>
      </div>
    </div>
  `,
  styles: [`
    .card { border: 1px solid #ccc; padding: 20px; border-radius: 8px; max-width: 400px; margin: 20px auto; text-align: center; }
    .actions button { margin: 5px; padding: 10px 15px; border: none; border-radius: 5px; cursor: pointer; }
  `]
})
export class SignalCounter {
  // Create a writable signal with an initial value of 0.
  count = signal(0);

  // Create a computed signal that depends on the 'count' signal.
  doubleCount = computed(() => this.count() * 2);

  // Method to update the 'count' signal using .update().
  increment() {
    this.count.update(value => value + 1);
  }

  // Method to update the 'count' signal using .set().
  decrement() {
    this.count.set(this.count() - 1);
  }

  // Method to reset the 'count' signal using .set().
  reset() {
    this.count.set(0);
  }

  constructor() {
    // An effect is a simple way to see signals in action.
    // It runs whenever one of its dependencies changes.
    effect(() => {
      console.log(`The current count is: ${this.count()}`);
    });
  }
}