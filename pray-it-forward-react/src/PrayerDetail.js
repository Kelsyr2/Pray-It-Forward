
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function PrayerDetail() {
  const { id } = useParams();

  const [prayer, setPrayer] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/prayers')
      .then(response => {
        const selectedPrayer = response.data.find(
          p => String(p.Prayer_id) === String(id)
        );

        if (selectedPrayer) {
          setPrayer(selectedPrayer);
        } else {
          setError('Prayer request not found.');
        }
      })
      .catch(err => {
        console.error('Error loading prayer:', err);
        setError('Unable to load prayer request.');
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p>Loading prayer request...</p>;
  }

  if (error) {
    return <p className="text-danger">{error}</p>;
  }

  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{prayer.Title}</h2>

          <p className="card-text">{prayer.Description}</p>

          <p>
            <strong>Urgency:</strong> {prayer.Urgency}
          </p>

          <p>
            <strong>Public:</strong>
            {prayer.Is_public ? ' Yes' : ' No'}
          </p>

          <Link
            to="/prayers"
            className="btn text-white"
            style={{ backgroundColor: '#D87093' }}
          >
            Back to Prayer Requests
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PrayerDetail;
