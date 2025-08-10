import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  template: `
       <div class="child-container">
      <h3>Child Component</h3>
      <ng-content></ng-content>
    </div>
  `,
  styles:
      [`
        .child-container {
          border: 1px dashed grey;
          padding: 10px;
          margin : 10px;
        }
      `]
})
export class Child {

}
