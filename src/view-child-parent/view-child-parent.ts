import { Component, viewChild } from '@angular/core';
import { ViewChildChild } from '../view-child-child/view-child-child';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-child-parent',
  standalone: true,
  imports: [ViewChildChild, CommonModule],
  template: `

      <div style="border: 2px solid darkblue; padding: 15px; margin: 20px;">
      <h2>ViewChild Parent</h2>
      <app-view-child-child />
      <button (click)="changeChildStatus()">Go Online</button>
    </div>
  
  `,
  styleUrl: './view-child-parent.css'
})
export class ViewChildParent {

  // Query for the child component in the view
  child = viewChild(ViewChildChild);

  changeChildStatus() {
    // Access the child's instance and call its method
    this.child()?.goOnline();
  }

}
