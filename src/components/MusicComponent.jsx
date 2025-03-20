
import musicNote from '../assets/music_note.png'
import music from '../assets/music.png'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { beats } from './beats'; 
import { mixtapes } from './mixtapes'; 
import { singles } from './singles';
import { albums } from './albums';



const MusicComponent = () => {
    const [sortedBeats, setSortedBeats] = useState([]);
    const [sortedMixtapes, setSortedMixtapes] = useState([]);
    const [sortedAlbums, setSortedAlbums] = useState([]);
    const [sortedSingles, setSortedSingles] = useState([]);

    function scrollToLeft(button) {
        const scrollContainer = button.closest('.blog').querySelector('.scroll-container');
        scrollContainer.scrollBy({ left: -500, behavior: 'smooth' });
    }
    
    function scrollToRight(button) {
       const scrollContainer = button.closest('.blog').querySelector('.scroll-container');
        scrollContainer.scrollBy({ left: 500, behavior: 'smooth' });
    }
    

    useEffect(() => {
            const sorted = [...beats].sort((a, b) => new Date(b.date) - new Date(a.date));
            setSortedBeats(sorted);
    }, []);

    
    useEffect(() => {
           const sorted = [...mixtapes].sort((a, b) => new Date(b.date) - new Date(a.date));
           setSortedMixtapes(sorted);
    }, []);

    useEffect(() => {
          const sorted = [...albums].sort((a, b) => new Date(b.date) - new Date(a.date));
          setSortedAlbums(sorted);
    }, []);

    useEffect(() => {  
          const sorted = [...singles].sort((a, b) => new Date(b.date) - new Date(a.date));
          setSortedSingles(sorted);
    }, []);
  
    return ( 
        <>


       <main className="target-section">
            <h1 className="header">Music</h1>
            <div className="search">
                <Link to ="/search"><button>Search songs, albums, beats and mixtapes...</button></Link>
            </div>
            <div className="blog">
                <div className="sub-heading">
                    <div>
                        <div className="sub">
                                <img src={musicNote} width="25" />
                                <h3>Album Contributions</h3>                        
                            </div> 
                    </div>
                </div>
                <div className="scrollbtns">
                    <button className="scroll-btn left" onClick={() => scrollToLeft()}> &#10094; </button>
                    <button className="scroll-btn right" onClick={() => scrollToRight()}> &#10095; </button>
                </div>
                    <div className="grid-container">
                        <div className="scroll-content">
                            <div className="album-box">  
                                <div id="albums">
                                    <div id="album-image">
                                       {sortedAlbums.map((album) => (
                                            <Link to={`/album/${album.id}`} key={album.id}>
                                                <img
                                                src={album.image}
                                                loading="lazy"
                                                className="skeleton"
                                                />
                                                <p id="cover-name">{album.name}</p>
                                                <p id="album-name">{album.album}</p>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
            </div>
            
    
            <div className="blog">
                <div className="sub-heading">
                    <div>
                            <div className="sub">
                                <img src={music} width="25" />
                                <h3>Singles</h3>                        
                            </div>
                 
                    </div>
                </div>
                            <div className="single-box">  
                                <div id="singles">
                                    <div id="all-singles-image">
                                    {sortedSingles.map((single) => (
                                        <Link to={`/song/${single.id}`} key={single.id}>
                                        <img
                                            src={single.image}
                                            alt={single.single}
                                            loading="lazy"
                                            className="skeleton"
                                        />
                                        <div>
                                                <p id="mixtape-name" style={{fontWeight: '600', fontSize: '14px'}}>{single.name}</p>
                                                <p id="date-mod">{single.single}</p>
                                                <p id="date-mod">{single.date}</p>
                                        </div>
                                        </Link>
                                    ))}
                                    </div>
                                </div>
                            </div>
                
            </div>
            <div className="blog">
                <div className="sub-heading">
                    <div>
                            <div className="sub">
                                <img src={music} width="25"/>
                                <h3>Beats</h3>                        
                            </div>
                    </div>
                    <div className="scrollbtns">
                            <button className="scroll-btn left" onClick={() => scrollToLeft()}> &#10094; </button>
                            <button className="scroll-btn right" onClick={() => scrollToRight()}> &#10095; </button>
                    </div>
                    <div className="scroll-container">
                        <div className="scroll-content">
                            <div className="beat-box">  
                                <div id="beats">
                                    <div id="beats-image">
                                    {sortedBeats.map((beat) => (
                                                <Link to={`/beat/${beat.id}`} key={beat.id}>
                                                    <img
                                                        src={beat.image}
                                                        loading="lazy"
                                                        className="skeleton"
                                                    />
                                                    <p id="cover-name">{beat.name}</p>
                                                    <p id="album-name">{beat.beat}</p>
                                           </Link>
                                        ))}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>            
            </div>

            <div className="blog">
                <div className="sub-heading">
                    <div>
                            <div className="sub">
                                <img src={music} width="25" />
                                <h3>Mixtapes</h3>                        
                            </div>
                    </div>
                            <div className="mixtape-box">  
                                <div id="mixtapes">
                                    <div id="mixtape-image">
                                        {sortedMixtapes.map((mixtape) => (
                                                <Link to={`/mixtape/${mixtape.id}`} key={mixtape.id}>
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
            </div>    
        </main>



        </>
     );
}
 
export default MusicComponent;