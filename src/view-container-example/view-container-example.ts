import { Component, ViewContainerRef, inject } from '@angular/core';
import { DynamicMessage } from '../dynamic-message/dynamic-message';


@Component({
  selector: 'app-view-container-example',
  imports: [],
  template: `
    <div style="border: 2px solid darkblue; padding: 20px; margin: 20px;">
      <h3>View Container Example</h3>
      <p>Click the button below to create a new component.</p>
      <button (click)="loadComponent()">Load Component</button>
    </div>
  `
})
export class ViewContainerExample {

  //Inject the ViewContainerRef. it points to this component's host element
  private viewContainer = inject(ViewContainerRef);

  loadComponent() 
  {
    // clear any previously created components(optional)
    this.viewContainer.clear();

    // Create the component dynamically add it to dom
    this.viewContainer.createComponent(DynamicMessage);

    // We can now interact with the created component's instance
    console.log('Component created:');
  }
}
