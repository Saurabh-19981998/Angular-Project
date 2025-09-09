import { CommonModule } from '@angular/common';
import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal-demo',
  imports: [CommonModule],
  template: `
    <div class="card">
      <h3>Linked Signal Demo</h3>
      <p>Available shipping options: <strong>{{ shippingOptions() }}</strong></p>
      <hr/>
      <p>Selected shipping option (writable signal):</p>
      <p><strong>{{ selectedSignalOption() }}</strong></p>
      <button (click)="changeToInvalidOption()">Change to Invalid Option</button>

      <hr/>
      <p>Selected shipping option (linked signal):</p>
      <p><strong>{{ selectedLinkedSignalOption() }}</strong></p>
      <button (click)="changeLinkedSignal()">Change Linked Signal</button>

      <hr/>

      <button (click)="updateShippingOptions()">Update Shipping Options</button>
    </div>
  `,
  styles: [`
    .card { border: 1px solid #ccc; padding: 20px; border-radius: 8px; max-width: 600px; margin: 20px auto; text-align: center; }
    .actions button { margin: 5px; padding: 10px 15px; border: none; border-radius: 5px; cursor: pointer; }
  `]

})
export class LinkedSignalDemo {

// Our source of truth, a regular signal
  shippingOptions = signal(['Ground', 'Air', 'Sea']);

  // A simple writable signal. It does not react to `shippingOptions` changes.
  selectedSignalOption = signal(this.shippingOptions()[0]);

  // A linked signal. It reacts to `shippingOptions` changes.
  selectedLinkedSignalOption = linkedSignal(() => this.shippingOptions()[0]);

  changeToInvalidOption() {
    // Change the regular signal to a value that will become invalid later
    this.selectedSignalOption.set('Air');
    console.log("Changed regular signal to 'Air'");
  }

  changeLinkedSignal() {
    // Change the linked signal to a different valid option
    this.selectedLinkedSignalOption.set(this.shippingOptions()[2]);
    console.log("Changed linked signal to 'Sea'");
  }

  updateShippingOptions() {
    // This will cause the `selectedLinkedSignalOption` to automatically update
    // but will leave `selectedSignalOption` unchanged.
    this.shippingOptions.set(['Express', 'Overnight', 'Next-Day']);
    console.log("Updated shipping options. Observe the change in the linked signal.");
  }



}
