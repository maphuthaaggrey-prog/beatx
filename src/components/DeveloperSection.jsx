import whatsapp from '../assets/icons8-whatsapp-60.png'
import gmail from '../assets/icons8-gmail (1) 1.png'
import location from '../assets/icons8-location-60.png'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import { Helmet } from 'react-helmet';
import picture from '../assets/aggrey.jpg'

const DeveloperSection = () => {
    const handleGoBack = () => {
        window.history.back(); // Navigate to the previous page
    };
    return (
       <> 
       <Helmet>
            <title>Developer</title>
        </Helmet>
        <section className="developer-section">
            <div className="navbar">
                    <a href="#close" className="back" id="back-button" onClick={handleGoBack}>
                        <i className="fa-solid fa-arrow-left"></i></a>
                    <i><Link to="/"><img src={logo} id="search-icon" /></Link></i>
            </div>
            <div className="main-content">             

                <div className="developer-details">
                    <h3 style={{fontSize: '20px', padding: '0'}}>Aggrey Maphutha</h3>
                    <p className="developer-role">Front End Developer</p>
                    <img src={picture} style={{width:'200px', borderRadius: '3px', marginBottom: '1em'}}></img>
                    <p className="developer-bio">Detail-oriented web developer with extensive
                         expertise in React, JavaScript, and modern web technologies. With a strong 
                         foundation in front-end development, he specializes in building responsive,
                          user-friendly, and high-performance web applications.
                          </p><br />
                          <p className="developer-bio">
                        His skill set includes frontend development with React and JavaScript, UI/UX design using libraries like Material-UI.
                    </p>

                    <div style={{lineHeight: '25px',textAlign: 'start', width: '100%', border: 'none',margin: '4em 0'}}>
                            <p style={{fontSize: '16px', marginBottom: '8px', fontWeight: '600'}}>LETS CONNECT</p>
                            
                            <p  className="developer-bio">Always open to new opportunities, collaborations, and conversations about tech. Feel free to reach out through social media</p>
                          
                           <br />
                            <div className="socials" style={{display: 'flex',alignItems: 'center', marginBottom: '1em', opacity: '90%'}}>
                                <img src={whatsapp} style={{width: '40px', marginRight: '1em', padding: '4px', border: '1px solid white', borderRadius: '6px'}}></img>
                                <p style={{fontWeight: 'normal'}}>+27 76 521 6787</p>
                            </div>
                            <div className="socials" style={{display: 'flex',alignItems: 'center', marginBottom: '1em', opacity: '90%'}}>
                                <img src={gmail} style={{width: '40px', marginRight: '1em', padding: '4px', border: '1px solid white', borderRadius: '6px'}}></img>
                                <p style={{fontWeight: 'normal'}}>maphuthaaggrey83@gmail.com</p>
                            </div>
                            <div className="socials" style={{display: 'flex',alignItems: 'center', opacity: '90%'}}>
                                <img src={location} style={{width: '40px', marginRight: '1em', padding: '4px', border: '1px solid white', borderRadius: '6px'}}></img>
                                <p style={{fontWeight: 'normal'}}>Ga Masemola, Limpopo - South Africa</p>
                            </div>
                        </div>
                </div>
            </div>
            <p  style={{marginTop: '7em', bottom: '0px', color: 'grey', textAlign: "center"}}>@2025, Veteran Beatxx, All rights reserved</p>
        </section>

        </>
    );
};
export default DeveloperSection;