import { Component, computed, contentChildren, ElementRef, viewChild } from '@angular/core';
import { QueryOptionsChild } from '../query-options-child/query-options-child';

@Component({
  selector: 'app-query-options-parent',
  imports: [],
  template: `
    <div style="border: 2px solid purple; padding: 15px; margin: 20px;">
      <h2>Parent Component with Advanced Queries</h2>

      <div #inputWrapper>
        <h3>View Query (using template variable and 'read')</h3>
        <p>Wrapper element reference available: {{ inputWrapperRef() !== null }}</p>
      </div>

      <button (click)="logInputWrapper()">Log Element Ref</button>

      <hr>

      <h3>Content Query (with 'descendants')</h3>
      <p>Number of children found: {{ allChildrenCount() }}</p>
      <ng-content></ng-content>
    </div>
  `,
  styleUrl: './query-options-parent.css'
})
export class QueryOptionsParent {
  // 1. viewChild using a string locator with the 'read' option to get ElementRef
  inputWrapperRef = viewChild('inputWrapper', { read: ElementRef });

  // 2. contentChildren with the 'descendants' option
  allChildren = contentChildren(QueryOptionsChild, { descendants: true });

  // A computed signal to get the count of all children
  allChildrenCount = computed(() => this.allChildren().length);

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit: All projected content is initialized.');
  }

  logInputWrapper() {
    console.log('ElementRef of #inputWrapper:', this.inputWrapperRef());
  }
}
