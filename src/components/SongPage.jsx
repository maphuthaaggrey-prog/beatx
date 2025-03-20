import React, { useState, useEffect } from 'react'; // Added useState import
import { useParams, Link, useNavigate } from 'react-router-dom';
import { singles } from './singles'; // Ensure this import is correct
import logo from '../assets/logo.png';
import { Helmet } from 'react-helmet';

const Song = () => {
    const { id } = useParams();
    const single = singles.find((single) => single.id === Number(id));
    const navigate = useNavigate();

    const handleGoBack = (e) => {
        e.preventDefault();
        navigate(-1);
    };

    const [sortedSingles, setSortedSingles] = useState([]);

    useEffect(() => {
  
      const sorted = [...singles].sort((a, b) => new Date(b.date) - new Date(a.date));
      setSortedSingles(sorted);
    }, []);
    const filteredSingles = sortedSingles.filter((single) => single.id !== id);
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState('');

    const redirectToPlatform = (platform) => {
        let url = '';

        if (platform === 'YouTube') {
            url = single.youtubeUrl;
        } else if (platform === 'Geniux Music') {
            url = single.geniuxUrl;
        }

        if (url && url !== '') {
            // Open the URL in a new tab if available
            window.open(url, '_blank');
        } else {
            // Show the message if the URL is not available
            setMessage(`This single isn't available on ${platform}, but you can try listening on the other platform provided!`);
            setShowMessage(true);
        }
    };

    const handleOkayClick = () => {
        // Hide the message
        setShowMessage(false);
    };

    return (
        <>
        <Helmet>
            <title>{single.single}</title>
            <meta name="title" content={single.single} />
            <meta name="url" content={window.location.href} />
            <meta name="image" content={single.image} />

       </Helmet>
            <main id="song-wrap">
                <div className="navbar">
                    <a href="#" onClick={handleGoBack} className="back" id="back-button">
                        <i className="fa-solid fa-arrow-left"></i>
                    </a>
                    <i>
                        <Link to="/">
                            <img src={logo} id="search-icon"  alt="logo" />
                        </Link>
                    </i>
                </div>
                <div id="song-container">
                    <div id="song-details">
                        <div>
                            <img id="single-image" src={single.image} alt={single.single} />
                        </div>
                        <div className="right">
                            <h1 id="single-name">{single.name}</h1>
                            <h1 id="single-single">{single.single}</h1>
                            <h1 id="single-composer">{single.composer}</h1>
                            <h1 id="single-genre">{single.genre}</h1>
                            <p id="single-description">{single.description}</p>
                            <p id="single-date">{single.date}</p>
                            <div id="additional-questions"></div>
                            <h1 className="play-on">Play On</h1>
                            <div className="btns">
                                <a>
                                <button
                                    onClick={() => redirectToPlatform('YouTube')}
                                    id="youtube-url"
                                    className="youtube"
                                >
                                    YouTube
                                </button>
                                </a>
                                <a>
                                <button
                                    onClick={() => redirectToPlatform('Geniux Music')}
                                    id="geniux-url"
                                    className="geniux"
                                >
                                    Geniux Music
                                </button>
                                </a>
                            </div>

                            {showMessage && (
                                <div className="no-link">
                                    <p>{message}</p>
                                    <button onClick={handleOkayClick}>Okay</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="blog">
                    <div className="sub-heading">
                        <div>
                            <div className="sub">
                                <h3>All Songs</h3>
                            </div>
                        </div>
                    </div>
                    <div className="album-box space">
                        <div id="singles">
                            <div id="single-image-container">
                            {filteredSingles.map((single) => (
                                <Link to={`/song/${single.id}`}key={single.id}>
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
                </div>
                <canvas id="canvas" style={{ display: 'none' }}></canvas>
            </main>
        </>
    );
};

export default Song;