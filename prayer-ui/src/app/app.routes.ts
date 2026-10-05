import { Routes } from '@angular/router';
import { PrayerList } from './components/prayer-list/prayer-list';
import { PrayerCreate } from './components/prayer-create/prayer-create';
import { PrayerEdit } from './components/prayer-edit/prayer-edit';
import { PrayerDelete } from './components/prayer-delete/prayer-delete';

export const routes: Routes = [
  { path: 'prayers', component: PrayerList },
  { path: 'create', component: PrayerCreate },
  { path: 'edit/:id', component: PrayerEdit },
  { path: 'delete/:id', component: PrayerDelete }
];
