import { Link } from "react-router-dom";
import logo from '../assets/logo.png'

const Info = () => {
    
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
      
        <div className="about-hero" style={{paddingBottom: '0'}}>
        <h1 className="about-heading" >Info and Policies</h1>
        </div>
        <div className="more-wrap">
            <div className="wrap-info"> 
            <Link to ="/contact"><div className="more">
                    <p>CONTACT US</p>
                    <p style={{fontWeight: 'normal', color: 'grey', paddingTop: '9px'}}>Reach out to us for any inquiries or support.</p>
                </div>
            </Link>
            <a href="mailto:veteranbeatx@gmail.com?subject=Inquiry&body=Hello%20Veteran%20Beatx%2C%0A%0AI%20would%20like%20to%20inquire%20about..." aria-label="Send an email to Veteran Beatx" target='_blank'>
                <div className="more">  
                    <p>EMAIL US</p>
                    <p style={{fontWeight: 'normal', color: 'grey', paddingTop: '9px'}}>Send us an email at veteranbeatx@gmail.com.</p>
                </div>
            </a>
           <Link to ="/terms-and-conditions"><div className="more">
                    <p>TERMS AND CONDITIONS</p>
                    <p style={{fontWeight: 'normal', color: 'grey', paddingTop: '9px'}}>Read the terms and conditions for using our website.</p>
                </div>
            </Link>
            </div>
            <div className="wrap-info">
            <Link to ="/privacy-policy">
                <div className="more">
                    <p>PRIVACY POLICY</p>
                        <p style={{fontWeight: 'normal', color: 'grey', paddingTop: '9px'}}>Learn how we protect your data and privacy.</p>
                </div>
            </Link>
            <Link to ="/services">
                <div className="more">
                    <p>SERVICES</p>
                        <p style={{fontWeight: 'normal', color: 'grey', paddingTop: '9px'}}>What we offer and provide</p>
                </div>
            </Link>
            <Link to ="/developer">
                <div className="more">
                    <p>MEET THE DEVELOPER</p>
                        <p style={{fontWeight: 'normal', color: 'grey', paddingTop: '9px'}}>Get to know the developer behind this website.</p>
                </div>
            </Link>
            </div>
               </div>
</div>

</main>

</>
     );
}
 
export default Info;