import React, { useState, useEffect } from 'react';
import { singles } from './singles'; 
import music from '../assets/music.png'
import { Link } from 'react-router-dom';

const SingleImageContainer = () => {
  const [sortedSingles, setSortedSingles] = useState([]);

  useEffect(() => {
    const sorted = [...singles];
    setSortedSingles(sorted);
  }, []);

  return (
    <div className="blog">
      <div className="sub-heading">
        <div>
          <div className="sub">
            <img src={music} width="25" alt="Music" />
            <h3>Popular Singles</h3>
          </div>
          <Link to="/music" style={{ textDecoration: 'none', color: 'grey' }}>
            <h5>View All</h5>
          </Link>
        </div>
        <div id="single-image">
          {sortedSingles
            .filter((single) => ["Ohhkay", "Buti (Ft. Shibu Molomo)", "Pay My Taxes"].includes(single.single)) // Replace with actual ids
            .map((single) => (
              <Link to={`song/${single.id}`} key={single.id}>
                <img
                  src={single.image}
                  alt={single.single}
                  loading="lazy"
                  className="skeleton"
                />
                <div>
                  <p id="single-name">{single.name}</p>
                  <p id="single-name">{single.single}</p>
                  <p id="date-mod">{single.date}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SingleImageContainer;
