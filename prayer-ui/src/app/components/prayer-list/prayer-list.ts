import { Component, OnInit, signal } from '@angular/core';
import { Prayer } from '../../models/prayer.model';
import { PrayerService } from '../../services/prayer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prayer-list',
  imports: [CommonModule],
  templateUrl: './prayer-list.html',
  styleUrl: './prayer-list.css'
})
export class PrayerList implements OnInit {

  prayers = signal<Prayer[]>([]);

  constructor(private prayerService: PrayerService) {}

  ngOnInit(): void {
  this.prayerService.getPrayers().subscribe({
    next: (data: any[]) => {

      const mappedPrayers = data.map(prayer => ({
        prayerId: prayer.Prayer_id,
        userId: prayer.User_id,
        title: prayer.Title,
        description: prayer.Description,
        dateCreated: prayer.Date_created,
        urgency: prayer.Urgency,
        isPublic: Boolean(prayer.Is_public)
      }));

      this.prayers.set(mappedPrayers);

      console.log('Prayers:', mappedPrayers);
    },
    error: (error) => {
      console.error('Error loading prayers:', error);
    }
  });
  }
}