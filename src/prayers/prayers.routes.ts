import { Router } from 'express';
import * as PrayerController from './prayers.controller';

const router = Router();

router
  .route('/prayers')
  .get(PrayerController.readPrayers)
  .post(PrayerController.createPrayer);

router
  .route('/prayers/:id')
  .put(PrayerController.updatePrayer)
  .delete(PrayerController.deletePrayer);

export default router;