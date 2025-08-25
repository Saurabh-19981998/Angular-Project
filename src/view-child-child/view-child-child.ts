import { Component , signal } from '@angular/core';

@Component({
  selector: 'app-view-child-child',
  imports: [],
  template: `
      <div style="border: 1px solid blue; padding: 10px; margin: 5px;">
      <h4>Child Component</h4>
      <p>Status: {{ status() }}</p>
    </div>
  `,
  styleUrl: './view-child-child.css'
})
export class ViewChildChild {
  status = signal('Offline');

  // A method for the parent to call
  goOnline() {
    this.status.set('Online!');
  }
}
