import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrayerDetail } from './prayer-detail';

describe('PrayerDetail', () => {
  let component: PrayerDetail;
  let fixture: ComponentFixture<PrayerDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrayerDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(PrayerDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
