import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template : `
      <button (click)="onButtonClick()"> {{ buttonText()}}</button>
  `,
  styleUrl: './button.css'
})
export class Button {

   // Input property to receive button text from the parent
    buttonText = input.required<string>();

    //Output property to emit a custome "clicked " event
    buttonClicked = output<string>();
    

  onButtonClick()
  {
    console.log("Child component handled a click");
    this.buttonClicked.emit("button was clicked");
  }

}
