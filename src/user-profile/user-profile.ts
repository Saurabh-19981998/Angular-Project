import { Component, signal } from '@angular/core';

interface Badge {
  id: number;
  name: string;
}

@Component({
  selector: 'app-user-profile',
  imports: [],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css'
})
export class UserProfile {

  //Data for out template

  username = signal("pro_progaramming_123");
  isValidatedId = signal(false);
  isAdmin = signal(true);

  badges = signal<Badge[]>([
    { id:1, name: 'Angular Enthusiast' },
    { id:2, name: 'first contribution' },
    { id:3, name: 'Community Member' }
  ]);


  saveChanges() {
    console.log('Changes have been saved');
    this.isValidatedId.set(true);
  }

  toggleAdmin(){
    this.isAdmin.update(current => !current);
  }
}
