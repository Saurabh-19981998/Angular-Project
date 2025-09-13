import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

// We'll define a few possible user statuses.
type UserStatus = 'online' | 'offline' | 'away' | 'busy';

@Component({
  selector: 'app-user-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-status.html',
  styleUrl: './user-status.css'
})
export class UserStatusComponent {
  // The signal that holds our user's status.
  userStatus = signal<UserStatus>('online');

  // Method to cycle through the statuses.
  changeStatus(): void {
    const statuses: UserStatus[] = ['online', 'away', 'busy', 'offline'];
    const currentIndex = statuses.indexOf(this.userStatus());
    const nextIndex = (currentIndex + 1) % statuses.length;
    this.userStatus.set(statuses[nextIndex]);
  }
}