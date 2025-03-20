import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { albums } from './albums'
import logo from '../assets/logo.png'; // Ensure this import is correct
import { Helmet } from 'react-helmet';
const AlbumPage = () => {
    const { id } = useParams();
    const album = albums.find((album) => album.id === Number(id));
    const navigate = useNavigate();

    const handleGoBack = (e) => {
        e.preventDefault();
        navigate(-1);
    };
    const [sortedAlbums, setSortedAlbums] = useState([]);
    useEffect(() => {
  
      const sorted = [...albums].sort((a, b) => new Date(b.date) - new Date(a.date));
      setSortedAlbums(sorted);
    }, []);
    const filteredAlbums = sortedAlbums.filter((item) => item.id !== id);

    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState('');

    const redirectToPlatform = (platform) => {
        let url = '';

        if (platform === 'YouTube') {
            url = album.youtubeUrl;
        } else if (platform === 'Geniux Music') {
            url = album.geniuxUrl;
        }

        if (url && url !== '') {
            // Open the URL in a new tab if available
            window.open(url, '_blank');
        } else {
            // Show the message if the URL is not available
            setMessage(`This album isn't available on ${platform}, but you can try listening on the other platform provided!`);
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
            <title>{album.album}</title>
            <meta name="title" content={album.album} />
            <meta name="url" content={window.location.href} />
            <meta name="image" content={album.image} />

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
                            <img id="album-image" src={album.image} alt={album.album} />
                        </div>
                        <div className="right alb-right">
                            <h1 id="album-name">{album.name}</h1>
                            <h1 id="album-album">{album.album}</h1>
                            <h1 id="album-composer">{album.composer}</h1>
                            <p id="album-date">{album.date}</p>
                            <p id="album-description">{album.description}</p>
                            <div id="tracklist" className="track-listing">
                                {album.albumTrackList.map((trackItem, index) => (
                                    <p key={index}>{trackItem.track}</p>
                                ))}
                            </div>
                            <h1 className="play-on">Play On</h1>
                            <div className="btns">
                                {/* Buttons for platforms */}
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
                            {/* Message div */}
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
                                <h3>All Albums</h3>
                            </div>
                        </div>
                    </div>
                    <div className="album-box space">
                        <div id="singles">
                            <div id="single-image-container">
                            {filteredAlbums.map((album) => (
                                <Link to={`/album/${album.id}`} key={album.id}>
                                    <img
                                        src={album.image}
                                        loading="lazy"
                                        className="skeleton"
                                    />
                                <div>
                                        <p id="single-name">{album.name}</p>
                                        <p id="single-name">{album.album}</p>
                                        <p id="date-mod">{album.date}</p>
                                </div>
                                </Link>
                             ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default AlbumPage;