export const prayerQueries = {
  readPrayers: `
    SELECT *
    FROM Prayer
  `,

  createPrayer: `
    INSERT INTO Prayer
      (User_id, Title, Description, Urgency, Is_public)
    VALUES (?, ?, ?, ?, ?)
  `,

  updatePrayer: `
    UPDATE Prayer
    SET Title = ?,
        Description = ?,
        Urgency = ?,
        Is_public = ?
    WHERE Prayer_id = ?
  `,

  deletePrayer: `
    DELETE FROM Prayer
    WHERE Prayer_id = ?
  `
};