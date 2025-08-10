import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-global-style',
  template: 
        `
        <div class = "global-container">
            <h3> This is a global-style component header</h3>
            <p> This paragraph has global-style text.</p>
        </div>
        `
        ,
  styleUrl: './global-style.css',
  encapsulation : ViewEncapsulation.None
})
export class GlobalStyleComponent {

}
