import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PrayerService } from '../../services/prayer';
import { Prayer } from '../../models/prayer.model';

@Component({
  selector: 'app-prayer-edit',
  imports: [CommonModule, FormsModule],
  templateUrl: './prayer-edit.html',
  styleUrl: './prayer-edit.css'
})
export class PrayerEdit {

  prayerId: number = 0;

  prayer = signal<Prayer>({
    userId: 1,
    title: '',
    description: '',
    urgency: 'Low',
    isPublic: true
  });

  constructor(
    private prayerService: PrayerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

 ngOnInit(): void {
  this.prayerId = Number(this.route.snapshot.paramMap.get('id'));

  this.prayerService.getPrayer(this.prayerId).subscribe({
    next: (data) => {
  console.log('RAW DATA:', data);

  const existingPrayer = data[0];

  console.log('EXISTING PRAYER:', existingPrayer);

  this.prayer.set({
    prayerId: existingPrayer.Prayer_id,
    userId: existingPrayer.User_id,
    title: existingPrayer.Title,
    description: existingPrayer.Description,
    urgency: existingPrayer.Urgency,
    isPublic: Boolean(existingPrayer.Is_public)
  });

  console.log('MAPPED PRAYER:', this.prayer());
},
    error: (error) => {
      console.error('Error loading prayer:', error);
    }
  });
}


  onSubmit(): void {
  this.prayerService.updatePrayer(this.prayerId, this.prayer()).subscribe({
    next: () => {
      console.log('Prayer updated successfully');
      this.router.navigate(['/prayers']);
    },
    error: (error) => {
      console.error('Error updating prayer:', error);
    }
  });
}
}
