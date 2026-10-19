
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PrayerList() {
  const [prayers, setPrayers] = useState([]);
  const [error, setError] = useState('');
  const handleDelete = async (id) => {
    const confirmed = window.confirm(
        `Are you sure you want to delete this prayer request?`
    );

    if (!confirmed) {
        return;
    }

    try{
        await axios.delete(`http://localhost:3000/prayers/${id}`);

        setPrayers(currentPrayers =>
            currentPrayers.filter(prayer => prayer.Prayer_id !== id)
        );
        setError('');
    } catch (err) {
        console.error(`Error deleting Prayer:`, err);
        setError(`Unable to delete prayer request.`);
    }
  };

  useEffect(() => {
    axios.get('http://localhost:3000/prayers')
      .then(response => {
        setPrayers(response.data);
      })
      .catch(err => {
        console.error('Error loading prayers:', err);
        setError('Unable to load prayer requests.');
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2>Prayer Requests</h2>

      <div className="row">
        {prayers.map(prayer => (
          <div className="col-md-4 mb-3" key={prayer.Prayer_id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{prayer.Title}</h5>

                <p className="card-text">
                  {prayer.Description}
                </p>

                <p>
                  <strong>Urgency:</strong> {prayer.Urgency}
                </p>

                <p>
                  <strong>Public:</strong>
                  {prayer.Is_public ? ' Yes' : ' No'}
                </p>
            
<div className="d-flex gap-2">

<Link
  to={`/prayers/${prayer.Prayer_id}`}
  className="btn btn-outline-secondary"
>
  View Prayer
</Link>

  <Link
    to={`/edit/${prayer.Prayer_id}`}
    className="btn text-white"
    style={{ backgroundColor: '#D87093' }}
  >
    Edit Prayer
  </Link>

  <button
    type="button"
    className="btn btn-outline-danger"
    onClick={() => handleDelete(prayer.Prayer_id)}
  >
    Delete Prayer
  </button>
</div>

              </div>
            </div>
          </div>
        ))}
      </div>

      {error && <p className="text-danger">{error}</p>}
    </div>
  );
}

export default PrayerList;

