import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  template: `
  <div class ="form-container">
      <h2> Two Way binding demo</h2>
      <p>The name you typed is: <strong>{{userName}}</strong></p>

      <label for="nameInput">Enter your name: </label>
      <input id="nameInput" type="text" [(ngModel)]="userName"/>

      <button (click)="clearName()">Clear Name</button>

    </div>`,
  styles: [`
    .form-container { 
      border: 1px solid #ccc; 
      padding: 20px; 
      border-radius: 8px; 
      max-width: 500px; 
      margin: 20px auto; 
      text-align: center; 
      display: flex; 
      flex-direction: column; 
      gap: 10px;
    }
    input { padding: 8px; border-radius: 4px; border: 1px solid #ccc; }
    button { padding: 10px; border: none; background-color: #007bff; color: white; cursor: pointer; border-radius: 4px; }
  `]
})
export class Login {

    userName:string = 'Angular student'

    clearName() :void {
      this.userName = '';
    }
}
