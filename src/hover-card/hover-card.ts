import { Component } from '@angular/core';

@Component({
  selector: 'app-hover-card',
  imports: [],
  template: `
      <p>Hover over me to see the effect</p>
  `,
  styleUrl: './hover-card.css',
  host: {
    '[class.hovered]' : 'isHovered',
    '(mouseenter)' : 'onMouseEnter()',
    '(mouseleave)' : 'onMouseLeave()',
  }
})
export class HoverCard {
  // Internal state property to track the hover state
  isHovered: Boolean = false;

  //method to be called on mouseenter event
  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }

}
