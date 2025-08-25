import { afterNextRender, Component, inject ,ElementRef} from '@angular/core';

@Component({
  selector: 'app-autofocus-input',
  imports: [],
  template: `

        <div style="padding:20px; border:1px solid #ccc; margin:20px;">
          <h2>Autofocus Example</h2>
          <label for="username">Username:</label>
          <input #usernameinput id = "username" type="text" placeholder="Enter username" />
          <p style="font-size: 0.8em; color: gray;">This input is focused automatically on load!</p>
        </div>
  
  `,
  styles: [`input { display: block; width: 90%; margin-top: 5px; padding: 8px; }`]
})
export class AutofocusInput {
      constructor() {
          //Inject the ElementRef in the constructor
          const elementRef = inject(ElementRef);

          console.log("Component constructor called.");

          // Use a redenr callback to safely access the DOM

          afterNextRender(() => {
            // find the input element with the components host element
            const input = elementRef.nativeElement.querySelector('input');
            if(input)
            {
              input.focus();
              console.log("Input element focused.");
             }
    });
  }
}
