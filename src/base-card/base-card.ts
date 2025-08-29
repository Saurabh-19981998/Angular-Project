import { Component, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-base-card',
  imports: [],
  template: `
    <div class="base-card">
      <p class="base-message">Message from Base Card: {{ message() }}</p>
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .base-card {
      border: 2px solid lightgray;
      border-radius: 8px;
      padding: 15px;
      margin: 20px;
    }
    .base-message {
      font-style: italic;
      color: gray;
    }
  `]
})
export class BaseCard implements OnInit {


  message = input.required<string>();   
  
  protected initializedTimestamp : number | undefined;

  ngOnInit() : void {

    this.initializedTimestamp = Date.now();
     console.log(`BaseCardComponent: Initialized at ${this.initializedTimestamp}`);

  }
}
