
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function PrayerCreate() {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [urgency, setUrgency] = useState('Low');
  const [isPublic, setIsPublic] = useState(false);
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSaving(true);

    const newPrayer = {
      userId: 1,
      title,
      description,
      urgency,
      isPublic
    };

    try {
      await axios.post('http://localhost:3000/prayers', newPrayer);
      navigate('/prayers');
    } catch (err) {
      console.error('Error creating prayer:', err);
      setError('Unable to save your prayer request.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Create a Prayer Request</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Prayer Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Urgency</label>
          <select
            className="form-select"
            value={urgency}
            onChange={(e) => setUrgency(e.target.value)}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="isPublic"
            checked={isPublic}
            onChange={(e) => setIsPublic(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="isPublic">
            Make Prayer Public
          </label>
        </div>

        {error && <p className="text-danger">{error}</p>}

        <button
          type="submit"
          className="btn text-white"
          style={{ backgroundColor: '#D87093' }}
          disabled={saving}
        >
          {saving ? 'Saving...' : 'Submit Prayer'}
        </button>
      </form>
    </div>
  );
}

export default PrayerCreate;
