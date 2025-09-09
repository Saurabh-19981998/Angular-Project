import { Component, effect, linkedSignal, signal } from '@angular/core';

interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-custom-equality-demo',
  imports: [],
  template: `
    <div class="card">
      <h3>Custom Equality Demo</h3>
      <p>User changes (default equality): <strong>{{ userDefault() }}</strong></p>
      <p>User changes (custom equality): <strong>{{ userCustom()}}</strong></p>
      <hr/>
      <button (click)="updateUser()">Update User</button>
    </div>
  `,
  styles: [`
    .card { border: 1px solid #ccc; padding: 20px; border-radius: 8px; max-width: 600px; margin: 20px auto; text-align: center; }
    .actions button { margin: 5px; padding: 10px 15px; border: none; border-radius: 5px; cursor: pointer; }
  `]
})
export class CustomEqualityDemo {

  //source signal 
  sourceUser = signal<User>({id: 1, name: 'Alice'});

  //linked signal with default equality check (reference check)
  userDefault = linkedSignal(() => this.sourceUser());

  // linkedsignal with custom equality check (deep check)
  userCustom = linkedSignal(() => this.sourceUser(), {
    equal: (a, b) => a.id === b.id && a.name === b.name
  });

  constructor() {
    // Effect to log updates for the default signal
    effect(() => {
      console.log('Default Signal Updated:', this.userDefault());
    });

    // Effect to log updates for the custom equality signal
    effect(() => {
      console.log('Custom Equality Signal Updated:', this.userCustom());
    });
  }

  updateUser() {
    // Create a new object with the same 'id' but a different property
    const newUser = { id: 1, name: 'Alice Smith' };
    this.sourceUser.set(newUser);
  }

}
