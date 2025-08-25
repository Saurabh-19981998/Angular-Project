import { Component, computed, contentChild, contentChildren } from '@angular/core';
import { ContentQueryItem } from '../content-query-item/content-query-item';

@Component({
  selector: 'app-content-query-parent',
  imports: [],
  template: `

      <div style="border: 2px solid brown; padding: 15px; margin: 20px;">
      <h2>Content Query Parent</h2>
      <p>Number of items: {{ itemCount() }}</p>
      <ng-content />
    </div>
  
  `,
  styleUrl: './content-query-parent.css'
})
export class ContentQueryParent {

  items = contentChildren(ContentQueryItem);

  itemCount = computed(() => this.items().length);
}
