import { Router } from 'express';
import * as PrayerController from './prayers.controller';

const router = Router();

router
  .route('/prayers')
  .get(PrayerController.readPrayers);

export default router;