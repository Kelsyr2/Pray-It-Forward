import type { Request, Response } from 'express';
import * as PrayerDao from './prayers.dao';

export const readPrayers = async (req: Request, res: Response) => {
  try {
    const prayers = await PrayerDao.readPrayers();

    res.status(200).json(prayers);
  } catch (error) {
    console.error('Error reading prayers:', error);

    res.status(500).json({
      message: 'Error retrieving prayers'
    });
  }
};