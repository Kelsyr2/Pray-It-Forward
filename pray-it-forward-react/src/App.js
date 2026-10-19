
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrayerList from './PrayerList';
import PrayerCreate from './PrayerCreate';
import PrayerEdit from './PrayerEdit';
import PrayerDetail from './PrayerDetail';

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <div className="container mt-4">
        <Routes>
          <Route
            path="/"
            element={<h2>Welcome to Pray It Forward</h2>}
          />

          <Route
            path="/prayers"
            element={<PrayerList />}
          />

          <Route
            path="/create"
            element={<PrayerCreate />}
          />
          <Route
            path="/edit/:id"
            element={<PrayerEdit />}
          />
          <Route
            path="/prayers/:id"
            element={<PrayerDetail />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
