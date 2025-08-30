import { Component, ChangeDetectionStrategy, AfterViewInit, inject, ChangeDetectorRef, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildCounter } from '../child-counter/child-counter';

@Component({
  selector: 'app-parent-counter',
  imports: [CommonModule, ChildCounter],
  template: `
    <div style="border: 2px solid darkblue; padding: 20px; margin: 20px;">
      <h2>Parent Counter (Default Strategy)</h2>
      <p>This component is checked every second.</p>
      <p>Parent Counter: {{ parentCounter() }}</p>
      <app-child-counter [label]="'Child Counter'" [value]="childCounter()" />
      <button (click)="incrementChild()">Increment Child</button>
    </div>
  `,
  // This is the default, but we'll include it for clarity
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ParentCounterComponent {
  parentCounter = signal(0);
  childCounter = signal(0);

  constructor() {
    setInterval(() => {
      this.parentCounter.set(this.parentCounter() + 1);
    }, 1000);
  }

  incrementChild() {
    this.childCounter.set(this.childCounter() + 1);
  }
}