import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-theme-switcher',
  imports: [CommonModule],
  template: `
    <div class="card">
      <h3>Text Interpolation Demo</h3>

      <p>Your welcome message is: {{ welcomeMessage }}</p>
      <p>Your count is: {{ count }}</p>
      <p>Your color preference is: <strong>{{ theme() }}</strong></p>

      <button (click)="changeTheme()">Change Theme</button>
      <button (click)="changeMessage()">Change Message</button>
    </div>
  `,
  styles: [`
    .card { border: 1px solid #ccc; padding: 20px; border-radius: 8px; max-width: 600px; margin: 20px auto; text-align: center; }
    .card .dark { background-color: #333; color: white; }
    .card .light { background-color: #eee; color: black; }
    button { margin: 5px; padding: 10px 15px; border: none; border-radius: 5px; cursor: pointer; }
  `]
})
export class ThemeSwitcher {
// A simple string property that is not a signal.
  welcomeMessage = "Welcome to the app!";
  count = 0;

  // A signal for the theme, which will be reactive.
  theme = signal('dark');

  // A method to update the theme signal.
  changeTheme() {
    // Toggle the theme between 'dark' and 'light'.
    this.theme.update(currentTheme => currentTheme === 'dark' ? 'light' : 'dark');
  }

  // A method to update the non-signal property.
  changeMessage() {
    this.welcomeMessage = "Message changed!";
    this.count = 5;
    alert("The welcome message has been changed in the component, but the UI won't update!");
  }
}
