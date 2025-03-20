import React, { useState, useEffect } from 'react';
import { mixtapes } from './mixtapes'; 
import music from '../assets/music.png'
import { Link } from 'react-router-dom'

const MixtapesContainer = () => {
    const [sortedMixtapes, setSortedMixtapes] = useState([]);
    useEffect(() => {
      const sorted = [...mixtapes].sort((a, b) => new Date(b.date) - new Date(a.date));
      setSortedMixtapes(sorted);
    }, []);
    return ( 
        <>
                    <div className="blog">
                        <div className="sub-heading">
                            <div>
                                    <div className="sub">
                                        <img src={music} width="25" />
                                        <h3>Mixtapes</h3>                        
                                    </div>
                            </div>
                                    <div className ="mixtape-box">  
                                        <div id="mixtapes">
                                            <div id="mixtape-image">
                                            {sortedMixtapes.slice(0, 4).map((mixtape) => (
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
                    </div> 
        
        </>
     );
}
 
export default MixtapesContainer;