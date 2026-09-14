import { pool } from '../services/mysql.connector';
import { prayerQueries } from './prayers.queries';

export const readPrayers = async () => {
  const [rows] = await pool.query(prayerQueries.readPrayers);
  return rows;
};