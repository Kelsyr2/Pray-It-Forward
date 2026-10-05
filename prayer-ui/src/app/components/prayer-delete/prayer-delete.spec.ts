import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrayerDelete } from './prayer-delete';

describe('PrayerDelete', () => {
  let component: PrayerDelete;
  let fixture: ComponentFixture<PrayerDelete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrayerDelete],
    }).compileComponents();

    fixture = TestBed.createComponent(PrayerDelete);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
