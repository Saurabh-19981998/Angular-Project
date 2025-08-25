import { Component } from '@angular/core';
import { QueryOptionsNestedChild } from "../query-options-nested-child/query-options-nested-child";

@Component({
  selector: 'app-query-options-child',
  imports: [QueryOptionsNestedChild],
  template: `
    <div style="border: 1px solid green; padding: 10px; margin: 5px;">
      <p>Direct Child Component</p>
      <app-query-options-nested-child></app-query-options-nested-child>
    </div>
  `
})
export class QueryOptionsChild {

}
