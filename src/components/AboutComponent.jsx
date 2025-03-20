import MajitaMag from '../assets/covers/Majita Mag.jpg'
import geniuxLogo from '../assets/covers/geniux.svg'
import majitaLogo from '../assets/covers/Majita Mag Logo-02 1.svg'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

const AboutComponent = () => {

    const handleGoBack = () => {
        window.history.back(); // Navigate to the previous page
    };
    return (
        <>
        <main id="song-wrap">
                <div className="navbar">
                    <a href="#close" className="back" id="back-button" onClick={handleGoBack}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </a>
                    <i>
                        <Link to="/"><img src={logo} id="search-icon" /></Link>
                    </i>
                </div>
            <div className="main-content">
                    <div className="about-hero">
                            <h1 className="about-heading">Veteran Beatx</h1>
                            <p> Veteran Beatx, a music producer and beatmaker from South Africa. Creative at heart, driven by a passion for music and a desire to inspire others through my art.</p>
                            <p>His musical prowess shines through collaborations with artists from his neighborhood. His EP, <a href="https://music.geniux.co.za/playing/album/50504845357/" target="_blank"> "For The Win EP," </a> released on June 24, 2022, stands as a testament to his dedication and talent.</p>
                            <br />
                            <p>His journey from a young music enthusiast to a seasoned Veteran Beatx has inspired many, as he continues to pave the way for aspiring producers.</p>
                            <p>More of Veteran Beatx's work can be found on his YouTube channel, which has surpassed 100,000 views, He is also featured on South African YouTube content creator Sonwabile's EP, 'IPHI', released in late 2024</p>
                            <br />
                            <h1 className="about-heading">Featured on Majita Mag</h1>
                            <img src={MajitaMag} className="majita-photo " />
                            <p className="majita-message "><i>“ I'm proud of all the work I've produced, but I'm most proud of the 'For The Win Project'. I believe it's the only project that brought together almost every hip-hop artist in 1060. My vision was to feature even more, but unfortunately,
                                equipment limitations held me back. But still, the project's impact make it my number one accomplishment. “ </i> - Veteran Beatx on Majita Mag</p>
                            <br />
                            <p>On this website, you'll find a collection of Veteran's latest beats, music productions, and projects. We are excited to share our art with you and hope you'll join us on this musical journey.</p>
                            <br />
                            <br />
                            <div className="visit">
                                <div style={{marginRight: '5em'}}>
                                    <p>My Story on Majita Mag</p>
                                    <a href="https://www.majitamag.co.za/" target="_blank"><img src={majitaLogo} width="60px" style={{marginTop: '1em', marginBottom: '1em'}} /></a>
                                </div>
                                    <div>
                                        <p>Geniux Music</p>
                                        <a href="https://music.geniux.co.za/" target="_blank"><img src={geniuxLogo} width="170px" style={{marginTop: '1em'}} /></a>
                                    </div>
                                </div>      
                </div>     
            </div>
            <p  style={{marginTop: '13em', bottom: '0px', color: 'grey', textAlign: "center"}}>@2025, Veteran Beatxx, All rights reserved</p>

        </main>

        </>
     );
}
export default AboutComponent;