import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-focus-input',
  standalone: true,
  imports: [],
  template: `
    <div>
      <label for="nameInput">Enter your Name:</label>
      <input #nameInput id="nameInput" type="text" placeholder="Type your name here" />
      <p class="small-text">This input will be automatically focused.</p>
    </div>
  
  `,
  styles: [`
    .input-container {
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
      margin: 20px;
    }
    input {
      padding: 8px;
      margin-top: 5px;
      display: block;
      width: 90%;
    }
    .small-text {
      font-size: 0.8em;
      color: gray;
      margin-top: 10px;
    }
  `]
})
export class FocusInput implements AfterViewInit {
// Use @ViewChild to get a reference to the input element with the #nameInput template variable
  @ViewChild('nameInput') nameInputRef!: ElementRef;

  ngAfterViewInit(): void {
    // Now that the view is initialized, the nameInputRef is available.
    // We can safely access the nativeElement and call the focus() method.
    this.nameInputRef.nativeElement.focus();
    console.log('ngAfterViewInit: The input element is now focused.');
  }

}
