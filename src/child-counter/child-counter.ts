import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, DoCheck, input } from '@angular/core';

@Component({
  selector: 'app-child-counter',
  imports: [CommonModule],
  template: `
    <div style="border: 1px solid darkgreen; padding: 15px; margin-top: 10px;">
      <h4>Child Counter (Default Strategy)</h4>
      <p>{{ label() }}: {{ value() }}</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush, // The default behavior
})
export class ChildCounter implements DoCheck {
  label = input.required<string>();
  value = input.required<number>();

  ngDoCheck(): void {
    console.log('Child Counter (OnPush): ngDoCheck() is running...');
  }
}
