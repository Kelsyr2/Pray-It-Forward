import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PrayerService } from '../../services/prayer';
import { Prayer } from '../../models/prayer.model';

@Component({
  selector: 'app-prayer-create',
  imports: [CommonModule, FormsModule],
  templateUrl: './prayer-create.html',
  styleUrl: './prayer-create.css'
})
export class PrayerCreate {

  prayer: Prayer = {
  userId: 1,
  title: '',
  description: '',
  urgency: 'Low',
  isPublic: true
};

  constructor(
    private prayerService: PrayerService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.prayerService.createPrayer(this.prayer).subscribe({
      next: () => {
        console.log('Prayer created successfully');
        this.router.navigate(['/prayers']);
      },
      error: (error) => {
        console.error('Error creating prayer:', error);
      }
    });
  }
}

