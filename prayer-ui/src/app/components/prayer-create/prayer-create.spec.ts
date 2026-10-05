import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrayerCreate } from './prayer-create';

describe('PrayerCreate', () => {
  let component: PrayerCreate;
  let fixture: ComponentFixture<PrayerCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrayerCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(PrayerCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
