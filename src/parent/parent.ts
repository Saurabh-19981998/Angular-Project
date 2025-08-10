import { CommonModule } from '@angular/common';
import { Component, ContentChild, ElementRef } from '@angular/core';
import { Child } from "../child/child";

@Component({
  selector: 'app-parent',
  imports: [CommonModule, Child],
  template: `
  
      <div class="parent-container">
      <h2>Parent Component</h2>
      <app-child>
        <div #projectedContent>
          <p>This is the projected content. It has a counter: {{ counter }}</p>
        </div>
        </app-child>
    </div>
  `,
  styleUrl: './parent.css'
})
export class Parent {

   @ContentChild('projectedContent') projectedContent!: ElementRef;
   
    counter = 0;

    ngOnInit(): void {
    console.log('Parent: ngOnInit - Initializing...');
  }

  ngDoCheck(): void {
    // This runs extremely frequently, so use it sparingly!
    console.log('Parent: ngDoCheck - Checking for changes...');
    this.counter++;
  }

  ngAfterContentInit(): void {
    console.log('Parent: ngAfterContentInit - Projected content is ready!');
    // Access projected content here, but don't change state directly
    // console.log('Projected content element:', this.projectedContent.nativeElement);
  }

  ngAfterContentChecked(): void {
    console.log('Parent: ngAfterContentChecked - Projected content has been checked!');
    // You could perform actions here based on changes in the projected content
    // For example, if a value inside a projected element changed, this hook would fire.
  }
}
