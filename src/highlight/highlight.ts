import { Component } from '@angular/core';

@Component({
  selector: '[appHighlight].not(button)',
  imports: [],
  template: '<ng-content></ng-content>',
  styleUrl: './highlight.css'
})
export class Highlight {

}
