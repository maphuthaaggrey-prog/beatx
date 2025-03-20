import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState, useEffect } from 'react';
import menuIcon from '../assets/Menu (1).png'
const Sidebar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [slideIcon, setSlideIcon] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setSlideIcon(!slideIcon);
    };



    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            const targetSection = document.querySelector('.target-section');

            if (navbar && targetSection) {
                const sectionPosition = targetSection.getBoundingClientRect();

                if (sectionPosition.top <= 0) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 

    return (  
        <>

                    <div className="navbar">
                        <i  onClick={toggleMenu} ><img src={menuIcon} className="menu-icon" /></i>
                        <i><Link to="/"><img src={logo} id="search-icon" className={ slideIcon ? "slide-logo" : ""} /></Link></i>
                    </div>
                <div id ="sidebar" className={menuOpen ? "open" : ""}>
                            <i>
                                <img src={logo} className ="vet-logo" />
                            </i>
                            <a className="close-btn" onClick={toggleMenu}>
                                <i className="fa-solid fa-arrow-left"  ></i>
                            </a>
                                <Link to="/" onClick={toggleMenu}>
                                    <i className="fa fa-home" >
                                    </i>
                                    <span>Home</span>
                                </Link>

                                <Link to="/music"  onClick={toggleMenu}>
                                    <i className="fa fa-fire"></i>
                                    <span>Music</span>
                                </Link>

                                <Link to="/about"  onClick={toggleMenu}>
                                    <i className="fa fa-play-circle" ></i>
                                    <span>Veteran Beatx</span>
                                </Link>

                                <Link to="/info-and-policies"  onClick={toggleMenu}>
                                    <i className="fa-solid fa-circle-info"></i>
                                    <span>Info & Policies</span>
                                </Link>

                                <div className="line"></div>
                                <a href="https://youtube.com/@veteranbeatx?si=sbwoqsfulVnm0vFT" target="_blank">
                                    <i className="fa-brands fa-youtube"></i>
                                    <span>YouTube Channel</span>
                                </a>
                                <a href="https://www.facebook.com/maphutha.agree" target="_blank">
                                    <i className="fa-brands fa-facebook"></i>
                                    <span>Facebook</span>
                                </a>
                                <a href="https://www.instagram.com/veteran_aggrey/" target="_blank">
                                    <i className="fa-brands fa-instagram"></i>
                                    <span>Instagram</span>
                                </a>
                                <a href="https://wa.link/dbr7pm" target="_blank">
                                    <i className="fa-brands fa-whatsapp"></i>
                                    <span>Whatsapp</span>
                                </a>
    

                        </div>
        
        
        
        </>
    );
}
 
export default Sidebar;