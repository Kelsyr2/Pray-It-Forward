import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prayer } from '../models/prayer.model';

@Injectable({
  providedIn: 'root'
})
export class PrayerService {

  private host = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public getPrayers() {
    return this.http.get<Prayer[]>(`${this.host}/prayers`);
  }

  public getPrayer(prayerId: number) {
  return this.http.get<any[]>(`${this.host}/prayers/${prayerId}`);
}

  public createPrayer(prayer: Prayer) {
  return this.http.post<Prayer>(`${this.host}/prayers`, prayer);
}

public updatePrayer(prayerId: number, prayer: Prayer) {
  return this.http.put<Prayer>(
    `${this.host}/prayers/${prayerId}`,
    prayer
  );
}
public deletePrayer(prayerId: number) {
  return this.http.delete(`${this.host}/prayers/${prayerId}`);
}

}
