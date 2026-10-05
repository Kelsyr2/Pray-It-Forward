import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrayerEdit } from './prayer-edit';

describe('PrayerEdit', () => {
  let component: PrayerEdit;
  let fixture: ComponentFixture<PrayerEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrayerEdit],
    }).compileComponents();

    fixture = TestBed.createComponent(PrayerEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
