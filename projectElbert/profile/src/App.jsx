import { useState } from 'react';
import './App.css';
import Profile1 from './profile1';
import Profile2 from './profile2';
import Profile3 from './profile3';
import Profile4 from './profile4';
import Profile5 from './profile5';
import Profile6 from './profile6';
import Profile7 from './profile7';
import Profile8 from './profile8';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const profiles = [Profile1, Profile2, Profile3, Profile4, Profile5, Profile6, Profile7, Profile8];
  const CurrentProfile = profiles[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? profiles.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === profiles.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="app-container">
      <h1>Job Profiles Carousel</h1>
      
      <div className="carousel-container">
        <button className="nav-button left-arrow" onClick={goToPrevious}>
          &#8249;
        </button>

        <div className="profile-display">
          <CurrentProfile />
        </div>

        <button className="nav-button right-arrow" onClick={goToNext}>
          &#8250;
        </button>
      </div>

      <div className="indicators">
        {profiles.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
