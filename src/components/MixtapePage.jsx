import logo from '../assets/logo.png'
import { Link, useParams, useNavigate  } from 'react-router-dom'
import { mixtapes } from './mixtapes';
import React from 'react'
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet'

const Mixtape = () => {
    const { id } = useParams();
    const mixtape = mixtapes.find((mixtape) => mixtape.id === Number(id));
    
    const navigate = useNavigate();      
    const handleGoBack = (e) => {
      e.preventDefault();
      navigate(-1); 
    };
    const [sortedMixtapes, setSortedMixtapes] = useState([]);
    useEffect(() => {
      const sorted = [...mixtapes].sort((a, b) => new Date(b.date) - new Date(a.date));
      setSortedMixtapes(sorted);
    }, []);
    const filteredMixtapes = sortedMixtapes.filter((item) => item.id !== id);
    return (
        <>
        <Helmet>
            <title>{mixtape.mixtape}</title>
            <meta name="title" content={mixtape.mixtape} />
            <meta name="url" content={window.location.href} />
            <meta name="image" content={mixtape.image} />

       </Helmet>
        <main id="song-wrap">
                        <div className="navbar">
                            <a href="#" onClick={handleGoBack} className="back" id="back-button"><i className="fa-solid fa-arrow-left"></i></a>
                            <i><Link to="/"><img src={logo} id="search-icon" /></Link></i>
                        </div>
                    <div id="song-container">
                            <div id="song-details">
                                    <div>
                                        <img id="single-image" src={mixtape.image} alt={mixtape.mixtape} />
                                    </div>
                                    <div className="right">
                                            <h1 id="mixtape-name">{mixtape.name}</h1>
                                            <h1 id="mixtape-mixtape">{mixtape.mixtape}</h1>
                                            <h1 id="mixtape-composer">Composer: {mixtape.composer}</h1>
                                            <p id="mixtape-description">{mixtape.description}</p>
                                            <p id="mixtape-date">Released On: {mixtape.date}</p>
                                            <h1 className="play-on">Play On</h1>
                                            <div className="btns">
                                            <a href={mixtape.geniuxUrl} target="_blank" rel="noopener noreferrer">
                                                    <button id="geniux-url" className="geniux">Geniux Music</button>
                                            </a>
                                        </div>
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
                                                {filteredMixtapes.map((mixtape) => (
                                                    <Link to ={`/mixtape/${mixtape.id}`} key={mixtape.id}>
                                                    <img
                                                        src={mixtape.image}
                                                        alt={mixtape.mixtape}
                                                        loading="lazy"
                                                        className="skeleton"
                                                    />
                                                    <div>
                                                            <p id="single-name">{mixtape.name}</p>
                                                            <p id="single-name">{mixtape.mixtape}</p>
                                                            <p id="date-mod">{mixtape.date}</p>
                                                    </div>
                                                    </Link>
                                                ))}
                                                </div>
                                            </div>
                                </div>
                        </div>
                                <canvas id="canvas" style={{display: 'none'}}></canvas> 

        </main>
        
        </>
      );
}
 
export default Mixtape;