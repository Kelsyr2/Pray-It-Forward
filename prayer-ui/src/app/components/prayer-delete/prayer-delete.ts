import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrayerService } from '../../services/prayer';

@Component({
  selector: 'app-prayer-delete',
  imports: [],
  templateUrl: './prayer-delete.html',
  styleUrl: './prayer-delete.css'
})
export class PrayerDelete {

  prayerId: number = 0;

  constructor(
    private prayerService: PrayerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.prayerId = Number(this.route.snapshot.paramMap.get('id'));
  }

  deletePrayer(): void {
    this.prayerService.deletePrayer(this.prayerId).subscribe({
      next: () => {
        console.log('Prayer deleted successfully');
        this.router.navigate(['/prayers']);
      },
      error: (error) => {
        console.error('Error deleting prayer:', error);
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/prayers']);
  }
}
