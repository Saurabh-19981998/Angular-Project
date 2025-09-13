import { CommonModule } from '@angular/common';
import { Component, model } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  template : `

    <div class="counter-container">
      <button (click)="updateCount(-1)">-</button>
      <span>{{ count }}</span>
      <button (click)="updateCount(+1)">+</button>
    </div>
  `,
  styles: [`
    .counter-container { display: flex; align-items: center; justify-content: center; gap: 10px; }
    button { font-size: 1.5rem; padding: 5px 15px; border: 1px solid #ccc; background: #f0f0f0; cursor: pointer; border-radius: 5px; }
    span { font-size: 1.5rem; font-weight: bold; min-width: 40px; text-align: center; }
  `]
})

export class Counter {

  count = model<number>(0);

  updateCount(amount:number): void {
    this.count.update(currentCount => currentCount + amount);
  }

}
