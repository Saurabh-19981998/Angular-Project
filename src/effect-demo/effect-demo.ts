import { isPlatformBrowser } from '@angular/common';
import { Component, effect, inject, PLATFORM_ID, signal, untracked } from '@angular/core';

@Component({
  selector: 'app-effect-demo',
  imports: [],
  template: `
    <div class="card">
      <h3>Advanced Effects Demo</h3>
      <p>Logged-in user: <strong>{{ currentUser() }}</strong></p>
      <p>Status message: <strong>{{ statusMessage() }}</strong></p>
      <div class="actions">
        <button (click)="loginUser()">Login</button>
        <button (click)="logoutUser()">Logout</button>
        <button (click)="updateStatus()">Update Status</button>
      </div>
    </div>
  `,
  styles: [`
    .card { border: 1px solid #ccc; padding: 20px; border-radius: 8px; max-width: 400px; margin: 20px auto; text-align: center; }
    .actions button { margin: 5px; padding: 10px 15px; border: none; border-radius: 5px; cursor: pointer; }
  `]
})
export class EffectDemo {
  //create a wriatable signal with an initial value of 0
   private platformId = inject(PLATFORM_ID);
  clickCount = signal(0);
  currentUser = signal('Guest');
  statusMessage = signal('Welcome!');

  constructor() {
     // Demo 1 - Reading a signal with untracked()
    effect(() => {
      //this effect runs only when the 'currentUser' signal changes
      const user = this.currentUser();
      untracked(() => {
        console.log(`User changed to: "${user}" - 
        Current message is: "${this.statusMessage()}"`);
      });
    });
}

   // Methods to update our signals.
  loginUser() {
    this.currentUser.set('Alice');
  }

  logoutUser() {
    this.currentUser.set('Guest');
  }

  updateStatus() {
    this.statusMessage.set('Status updated.');
  }
  
}
