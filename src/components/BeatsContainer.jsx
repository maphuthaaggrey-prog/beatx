import React, { useState, useEffect } from 'react';
import { beats } from './beats'; 
import music from '../assets/music.png'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const BeatsContainer = () => {
    const [sortedBeats, setSortedBeats] = useState([]);

    useEffect(() => {
  
      const sorted = [...beats].sort((a, b) => new Date(b.date) - new Date(a.date));
      setSortedBeats(sorted);
    }, []);
  
    return ( 
        <>
        <Helmet>
            <title>Beats</title>
            <meta name="url" content={window.location.href} />


       </Helmet>
           <div className="blog">
                <div className="sub-heading">
                    <div>
                        <div className="sub">
                            <img src={music} width="25" />
                            <h3>Beats</h3>                        
                        </div>
                        <Link to = "/music" style={{textDecoration: 'none', color: 'grey'}}><h5>View All</h5></Link>
                    </div>
                    <div class="scrollbtns">
                        <button className="scroll-btn left" onclick="scrollToLeft(this)">&#10094;</button>
                        <button className="scroll-btn right" onclick="scrollToRight(this)">&#10095;</button>
                    </div>
                    <div className="scroll-container">
                        <div className="scroll-content">
                            <div className="beat-box">  
                                <div id="beats">
                                    <div id="beats-image">
                                        {sortedBeats.slice(0, 5).map((beat) => (
                                                <Link to={`beat/${beat.id}`} key={beat.id}>
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



        </>
     );
}
 
export default BeatsContainer;