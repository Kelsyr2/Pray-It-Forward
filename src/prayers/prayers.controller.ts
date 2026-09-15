import type { Request, Response } from 'express';
import * as PrayerDao from './prayers.dao';
import { Prayer } from './prayers.model';

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

export const createPrayer = async (req: Request, res: Response) => {
  try {
    const prayer: Prayer = req.body;

    const result = await PrayerDao.createPrayer(prayer);

    res.status(201).json({
      message: 'Prayer created successfully',
      result
    });
  } catch (error) {
    console.error('Error creating prayer:', error);

    res.status(500).json({
      message: 'Error creating prayer'
    });
  }
};

export const updatePrayer = async (req: Request, res: Response) => {
  try {
    const prayerId = Number(req.params.id);
    const prayer: Prayer = req.body;

    const result = await PrayerDao.updatePrayer(prayerId, prayer);

    res.status(200).json({
      message: 'Prayer updated successfully',
      result
    });
  } catch (error) {
    console.error('Error updating prayer:', error);

    res.status(500).json({
      message: 'Error updating prayer'
    });
  }
};

export const deletePrayer = async (req: Request, res: Response) => {
  try {
    const prayerId = Number(req.params.id);

    const result = await PrayerDao.deletePrayer(prayerId);

    res.status(200).json({
      message: 'Prayer deleted successfully',
      result
    });
  } catch (error) {
    console.error('Error deleting prayer:', error);

    res.status(500).json({
      message: 'Error deleting prayer'
    });
  }
};