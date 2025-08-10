import { Component , input} from '@angular/core';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css'
})
export class UserCardComponent {
  // Required input : The parent must provide a value.
  userName = input.required<string>();

  //Optional inputs with default values.
  userEmail = input('default@gmail.com');
  userRole = input('General user');


  //2. Decorator approach

  // @Input({ required: true }) userName!: string;

  // // Optional inputs with default values.
  // @Input() userEmail: string = 'no-email@example.com';
  // @Input() userRole: string = 'General User';

}
