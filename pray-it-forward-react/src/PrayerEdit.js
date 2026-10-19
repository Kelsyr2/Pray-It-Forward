
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function PrayerEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [urgency, setUrgency] = useState('Low');
  const [isPublic, setIsPublic] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/prayers')
      .then(response => {
        const prayer = response.data.find(
          p => String(p.Prayer_id) === String(id)
        );

        if (!prayer) {
          setError('Prayer request not found.');
          return;
        }

        setTitle(prayer.Title || '');
        setDescription(prayer.Description || '');
        setUrgency(prayer.Urgency || 'Low');
        setIsPublic(Boolean(prayer.Is_public));
      })
      .catch(err => {
        console.error(err);
        setError('Unable to load prayer request.');
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await axios.put(`http://localhost:3000/prayers/${id}`, {
        userId: 1,
        title,
        description,
        urgency,
        isPublic
      });

      navigate('/prayers');
    } catch (err) {
      console.error(err);
      setError('Unable to update prayer request.');
    }
  };

  if (loading) return <p>Loading prayer request...</p>;

  return (
    <div className="container mt-4">
      <h2>Edit Prayer Request</h2>

      {error && <p className="text-danger">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Prayer Title</label>
          <input
            className="form-control"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Urgency</label>
          <select
            className="form-select"
            value={urgency}
            onChange={e => setUrgency(e.target.value)}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="editPublic"
            checked={isPublic}
            onChange={e => setIsPublic(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="editPublic">
            Make Prayer Public
          </label>
        </div>

        <button
          type="submit"
          className="btn text-white"
          style={{ backgroundColor: '#D87093' }}
          disabled={!!error}
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default PrayerEdit;
