import { pool } from '../services/mysql.connector';
import { prayerQueries } from './prayers.queries';
import { Prayer } from './prayers.model';

export const readPrayers = async () => {
  const [rows] = await pool.query(prayerQueries.readPrayers);

  return rows;
};

export const createPrayer = async (prayer: Prayer) => {
  const [result] = await pool.query(
    prayerQueries.createPrayer,
    [
      prayer.userId,
      prayer.title,
      prayer.description,
      prayer.urgency,
      prayer.isPublic
    ]
  );

  return result;
};

export const updatePrayer = async (
  prayerId: number,
  prayer: Prayer
) => {
  const [result] = await pool.query(
    prayerQueries.updatePrayer,
    [
      prayer.title,
      prayer.description,
      prayer.urgency,
      prayer.isPublic,
      prayerId
    ]
  );

  return result;
};

export const deletePrayer = async (prayerId: number) => {
  const [result] = await pool.query(
    prayerQueries.deletePrayer,
    [prayerId]
  );

  return result;
};