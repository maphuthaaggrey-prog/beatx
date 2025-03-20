import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
const ServicesPage = () => {

    const handleGoBack = () => {
        window.history.back(); // Navigate to the previous page
    };
    return (

<>
<main id="song-wrap">
        <div className="navbar">
            <a href="#close" className="back" id="back-button" onClick={handleGoBack}>
            <i className="fa-solid fa-arrow-left"></i></a>
            <i><Link to="/"><img src={logo} id="search-icon" /></Link></i>
        </div>
        <div className="main-content">
        <div className="about-hero">
            <h1 className="about-heading">Services</h1>
                <p className="role">Beat Making & Instrumentals</p>
                <p  className="developer-bio">High-quality, custom beats tailored to your unique style and vision.</p>
                <ul>
                    <li>Exclusive and non-exclusive beats for sale or lease</li>
                    <li>Genre-specific beats</li>
                    <li>Custom beat creation based on your preferences</li>
                    <li>Fast turnaround times for urgent projects</li>
                </ul>

                <p className="role">Audio Engineering & Mixing</p>
                <p className="developer-bio">Professional audio engineering to make your tracks sound polished and radio-ready.</p>
                <ul>
                    <li>Vocal mixing and mastering</li>
                    <li>Instrumental balancing and enhancement</li>
                    <li>Noise reduction and audio cleanup</li>
                    <li>Stem mixing for collaborative projects</li>
                </ul>

                <p className="role">Mixing & Mastering for Albums/EPs</p>
                <p className="developer-bio">Full mixing and mastering services for albums, EPs, and singles.</p>
                <ul>
                    <li>Track-by-track mixing for cohesive sound</li>
                    <li>Mastering for streaming platforms (Spotify, Apple Music, etc.)</li>
                </ul>
                <p className="role">Custom Projects</p>
                <p className="developer-bio">Tailored music production for unique projects.</p>
                <ul>
                    <li>Custom intros/outros for podcasts and YouTube channels</li>
                    <li>Background music for videos and streams</li>
                    <li>Remixes and mashups</li>

                </ul>

        </div>
        </div>
        <p  style={{marginTop: '7em', bottom: '0px', color: 'grey', textAlign: "center"}}>@2025, Veteran Beatxx, All rights reserved</p>
        </main>

        </>
    );
};

export default ServicesPage;