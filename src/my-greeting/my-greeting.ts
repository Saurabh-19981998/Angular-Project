import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-my-greeting',
  imports: [],
  template: `
    <div style="border: 2px solid #32a852; padding: 15px; text-align: center;">
      <p>Hello, {{ name() }}!</p>
      <button (click)="greet.emit()">Click Me</button>
    </div>
  `,
  styles: ``
})
export class MyGreeting {
  name = input.required<string>();
  greet = output<void>();
}
