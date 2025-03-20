import React, { useState, useEffect } from 'react';
import { albums } from './albums'; 
import { Link } from 'react-router-dom'
import musicNote from '../assets/music_note.png'

const AlbumContainer = () => {
  const [sortedAlbums, setSortedAlbums] = useState([]);
  useEffect(() => {

    const sorted = [...albums].sort((a, b) => new Date(b.date) - new Date(a.date));
    setSortedAlbums(sorted);
  }, []);

  function scrollToLeft(button) {
    const scrollContainer = button.closest('.blog').querySelector('.scroll-container');
    scrollContainer.scrollBy({ left: -500, behavior: 'smooth' });
}

function scrollToRight(button) {
   const scrollContainer = button.closest('.blog').querySelector('.scroll-container');
    scrollContainer.scrollBy({ left: 500, behavior: 'smooth' });
}



  return (
    <div classaName="blog">
            <div className="sub-heading">
                <div>
                    <div className="sub">
                        <img src={musicNote} width="25" />
                        <h3>Contributions</h3>                        
                    </div>
                    <Link to = "/music" style={{textDecoration: 'none', color: 'grey'}}><h5>View All</h5></Link>   
                </div>
                <div className="scrollbtns">
                    <button className="scroll-btn left" onClick={() => scrollToLeft()}> &#10094; </button>
                    <button className="scroll-btn right" onClick={() => scrollToRight()}> &#10095; </button>
                </div>
        <div className="scroll-container">
            <div className="scroll-content">
                <div className="album-box">  
                    <div id="albums">
                        <div id="highlight-album-image">
                            {sortedAlbums.slice(0, 5).map((album) => (
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
</div>
                    
  );

};

export default AlbumContainer;