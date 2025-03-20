import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { beats } from './beats'; // Ensure this import is correct
import logo from '../assets/logo.png'; // Ensure this import is correct


const BeatPage = () => {
    const { id } = useParams();
    const beat = beats.find((beat) => beat.id === Number(id));
    const navigate = useNavigate();

    const handleGoBack = (e) => {
        e.preventDefault();
        navigate(-1);
    };
    const [sortedBeats, setSortedBeats] = useState([]);

    useEffect(() => {
  
      const sorted = [...beats].sort((a, b) => new Date(b.date) - new Date(a.date));
      setSortedBeats(sorted);
    }, []);
    const filteredBeats = sortedBeats.filter((item) => item.id !== id);

    return (
        <>
        <Helmet>
            <title>{beat.beat}</title>
            <meta name="title" content={beat.beat} />
            <meta name="url" content={window.location.href} />
            <meta name="image" content={beat.image} />

       </Helmet>
            <main id="song-wrap">
                <div className="navbar">
                    <a href="#" onClick={handleGoBack} className="back" id="back-button">
                        <i className="fa-solid fa-arrow-left"></i>
                    </a>
                    <i>
                        <Link to="/">
                            <img src={logo} id="search-icon" alt="logo" />
                        </Link>
                    </i>
                </div>

                <div id="song-container">
                    <div id="song-details">
                        <div>
                            <img id="beats-image" src={beat.image} alt={beat.beat} />
                        </div>
                        <div className="right">
                            <h1 id="beat-name">{beat.name}</h1>
                            <h1 id="beat-mixtape">{beat.beat}</h1>
                            <h1 id="beat-composer">{beat.composer}</h1>
                            <p id="beat-date">{beat.date}</p>
                            <p id="beat-description">{beat.description}</p>
                            <div id="tracklist" className="tracklisting">
                                {beat.beatTrackList.map((trackItem, index) => (
                                    <p key={index}>{trackItem.track}</p>
                                ))}
                                <p style={{marginTop: '.6em', width: '80%'}}>The (Free) version of this beat is not available for streaming services (Spotify, Tidal, Apple Music, etc.)</p>
                            </div>
                            <h1 className="play-on">Play On</h1>
                            <div className="btns">
                                <a href={beat.youtubeUrl} target="_blank" rel="noopener noreferrer">
                                    <button id="youtube-url" style={{width: '50%', marginTop: '.3em'}} className="youtube">YouTube</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="blog">
                    <div className="sub-heading">
                        <div>
                            <div className="sub">
                                <h3>More Beats</h3>
                            </div>
                        </div>
                    </div>
                    <div className="album-box space">
                        <div id="singles">
                            <div id="single-image-container">
                            {filteredBeats.map((beat) => (
                                                <Link to={`/beat/${beat.id}`} key={beat.id}>
                                                    <img
                                                        src={beat.image}
                                                        loading="lazy"
                                                        className="skeleton"
                                                    />
                                <div>
                                        <p id="single-name">{beat.name}</p>
                                        <p id="single-name">{beat.beat}</p>
                                        <p id="date-mod">{beat.date}</p>
                                </div>
                                           </Link>
                                        ))}
                            </div>
                        </div>
                    </div>
                </div>

                <canvas id="canvas" style={{ display: 'none' }}></canvas>
            </main>
        </>
    );
};

export default BeatPage;