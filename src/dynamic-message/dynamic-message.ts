import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-message',
  imports: [],
 template: `
    <div style="padding: 10px; border: 1px dashed darkgreen; margin: 10px;">
      <h4>I was created dynamically!</h4>
    </div>
  `
})
export class DynamicMessage {

}
